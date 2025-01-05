import { Text, Image, View } from 'react-native'
import { router, Href, Redirect } from 'expo-router'

import { useGlobalContext } from '@/context/GlobalProvider'
import CustomButton from '@/components/CustomButton'

const logo = require('../assets/images/logo.svg')
const main = require('../assets/images/main.png')

const App = () => {
  const { loading, isLogged } = useGlobalContext()

  if (!loading && isLogged) {
    return <Redirect href='/home' />
  }

  return (
    <View className='items-center h-full p-6 bg-black justify-evenly'>
      <Image source={logo} />
      <Image source={main} />
      <Text className='text-xl font-bold text-center text-primary'>
        Unic library | <Text className='text-white'>Unic collection</Text>
      </Text>
      <CustomButton
        title='Get Started'
        handlePress={() => router.push('/sign-in' as Href)}
      />
    </View>
  )
}

export default App
