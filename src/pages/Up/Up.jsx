import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";

export default function Up() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });
  if (!fontsLoaded) {
    return;
  } else {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Dados Levantados</Text>
      </View>
      <View style={styles.body}><Text>a</Text></View>
    </View>
  )
}
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0e671e",
    ...Platform.select({
      android: {
        width: "100%",
        height: "10%"
      },
      web: {
        width: "100%",
        height: 100
      }
    })
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginTop: 20,
    ...Platform.select({
      android: {
        fontSize: 30,
        fontFamily: 'Montserrat_700Bold'
      },
      web: {
        fontSize: 70,
        fontFamily: 'Montserrat_700Bold'
      },
    })
  },
  body: {
    ...Platform.select({
      android: {
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#4a0788",
        height: "100%",
        padding: 20
      },
      web: {
        backgroundColor: "#48107d",
        height: "490%",
      }
    })
  }
})