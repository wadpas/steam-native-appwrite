import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import EmptyState from '@/components/EmptyState'
import { getBooks } from '@/lib/appwrite'
import useAppwrite from '@/lib/useAppwrite'
import BookCard from '@/components/BookCard'

const logo = require('../../assets/images/logo.svg')

const Home = () => {
  const { data: books, refetch, loading } = useAppwrite(getBooks)
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    refetch()
    setRefreshing(false)
  }

  console.log(books)

  return (
    <View className='justify-start h-full bg-black'>
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <BookCard book={item} />}
        ListHeaderComponent={() => (
          <View className='px-4'>
            <Image source={logo} />
            <SearchInput />
            <View className='flex-1 w-full py-5'>
              <Text className='text-lg text-white'>Latest Books</Text>
            </View>
            <Trending posts={[{ id: 2 }, { id: 3 }]} />
          </View>
        )}
        ListEmptyComponent={() => <EmptyState />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  )
}

export default Home
