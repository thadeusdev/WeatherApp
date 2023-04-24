import React, { useState } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import Counter from './src/demonstration/Counter'

const App = () => {
  const [ loading, setLoading ] = useState(true)
  if (loading) {
    return (
      <View style={styles.conatiner}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs/>
      {/* <Counter/> */}
    </NavigationContainer>
  )
}

const styles=StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
})

export default App