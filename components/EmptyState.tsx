import { View, Text, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

import CustomButton from './CustomButton'

const EmptyState = () => {
  return (
    <View className='items-center justify-center flex-1'>
      <Text className='text-white'>No books found</Text>
      <CustomButton
        title='Create new'
        handlePress={() => router.push('/(tabs)/create')}
      />
    </View>
  )
}

export default EmptyState
