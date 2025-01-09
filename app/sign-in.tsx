import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn = () => {
  const handleLogin = async () => {}

  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView contentContainerClassName='h-full justify-evenly items-center'>
        <Image source={images.steam} />

        <View className='flex w-full space-y-4'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>
            Welcome to Steam
          </Text>

          <View></View>

          <Text className='text-2xl text-center font-rubik-bold text-black-300'>
            Let's Get You Closer To {'\n'}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>

          <View></View>

          <Text className='text-lg text-center font-rubik text-black-200'>
            Login to Steam with Google
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className='py-4 mx-5 bg-white rounded-full shadow-md shadow-zinc-100'>
            <View className='flex flex-row items-center justify-center'>
              <Image
                source={icons.google}
                className='w-5 h-5'
                resizeMode='contain'
              />
              <Text className='ml-2 text-lg font-rubik-medium text-black-300'>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
