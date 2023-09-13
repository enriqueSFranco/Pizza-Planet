import React from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { CaloriesCounterRouter } from './src/router/CaloriesCounterRouter'
// import { RickAndMortyRouter } from './src/router/RiackAndMortyRouter'

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <RickAndMortyRouter /> */}
      <CaloriesCounterRouter />
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#e9ecef'
  },
})

export default App
