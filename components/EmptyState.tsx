import { View, Text, Image } from 'react-native'
import React from 'react'

const logo = require('../assets/images/empty.png')

const EmptyState = () => {
  return (
    <View className='items-center justify-center flex-1'>
      <Image
        source={logo}
        className='w-2 h-2 my-4'
        resizeMode='contain'
      />
      <Text className='text-white'>No books found</Text>
    </View>
  )
}

export default EmptyState
