import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const SearchInput = ({ title, value, placeholder, handleChangeText, keyboardType }: any) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className='w-full space-y-1'>
      <Text className='ml-3 text-white'>{title}</Text>
      <TextInput
        className='p-4 text-white bg-gray-800 rounded-xl'
        value={value}
        placeholder={'Search books'}
        placeholderTextColor='#4B5563'
        onChangeText={handleChangeText}
        keyboardType={keyboardType}
        secureTextEntry={title === 'Password' && !showPassword}
      />
      <Pressable
        className='absolute right-3 bottom-3'
        onPress={() => setShowPassword(!showPassword)}>
        <Ionicons
          name={'search'}
          color='#EF4444'
          size={26}
        />
      </Pressable>
    </View>
  )
}

export default SearchInput
