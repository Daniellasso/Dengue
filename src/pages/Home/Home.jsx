import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View>
      <View style= {styles.header}>
        <Text>Home</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4e8efe',
    height: '70%',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  }
})