import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { router, usePathname } from 'expo-router'

const SearchInput = ({ initialValue }: any) => {
  const pathName = usePathname()
  const [query, setQuery] = useState(initialValue || '')

  return (
    <View className='w-full mt-3'>
      <TextInput
        className='p-4 text-white bg-gray-800 rounded-xl'
        value={query}
        placeholder={'Search books'}
        placeholderTextColor='#4B5563'
        onChangeText={(e) => setQuery(e)}
      />
      <Pressable
        className='absolute right-3 bottom-3'
        onPress={() => {
          if (!query) {
            return Alert.alert('Please enter a search term')
          }
          if (pathName.startsWith('/search')) {
            router.setParams({ query })
          } else {
            router.push(`/search/${query}`)
          }
        }}>
        <Ionicons
          name={'search'}
          color='#F97316'
          size={26}
        />
      </Pressable>
    </View>
  )
}

export default SearchInput
