import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

import SearchInput from '@/components/SearchInput'
import { searchBooks } from '@/lib/appwrite'
import useAppwrite from '@/lib/useAppwrite'
import BookCard from '@/components/BookCard'
import EmptyState from '@/components/EmptyState'

const logo = require('../../assets/images/logo.svg')

const Search = () => {
  const { query } = useLocalSearchParams()
  const { data: books, refetch } = useAppwrite(() => searchBooks(query))

  useEffect(() => {
    refetch()
  }, [query])

  return (
    <View className='justify-start h-full bg-black'>
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <BookCard book={item} />}
        ListEmptyComponent={() => <EmptyState />}
        ListHeaderComponent={() => (
          <View className='p-4'>
            <Image source={logo} />
            <SearchInput initialValue={query} />
          </View>
        )}
      />
    </View>
  )
}

export default Search
