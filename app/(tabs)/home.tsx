import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import SearchInput from '@/components/SearchInput'
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

  return (
    <View className='justify-start h-full bg-black'>
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <BookCard book={item} />}
        ListHeaderComponent={() => (
          <View className='p-4'>
            <Image source={logo} />
            <SearchInput />
          </View>
        )}
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
