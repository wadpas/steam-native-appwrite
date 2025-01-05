import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

const useAppwrite = (fn: Function) => {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fn()
      setData(response)
    } catch (error) {
      Alert.alert('Error', 'Something went wrong')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => fetchData()

  return { data, loading, refetch }
}

export default useAppwrite
