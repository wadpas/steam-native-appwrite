import { View, Text, Image } from 'react-native'
import React from 'react'

const BookCard = ({ book: { title, author, year, genre, cover, description } }: any) => {
  return (
    <View className='flex-col items-start px-4 mb-14'>
      <Text
        className='text-base text-white'
        numberOfLines={1}>
        {title}
      </Text>
      <Text className='italic text-gray-100 '>{author}</Text>
      <Text className='font-thin text-gray-100 '>{year}</Text>
      <Text className='italic font-light text-gray-100 '>{genre}</Text>
      <Image
        source={{ uri: cover }}
        className='my-2 w-96 h-96'
        resizeMode='contain'
      />
      <Text className='text-xs text-gray-100 '>{description}</Text>
    </View>
  )
}

export default BookCard
