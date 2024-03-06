import { StyleSheet, Text, View, Platform, Image } from "react-native";
import React, { useState, useEffect } from "react";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";

function Home() {
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
          <Text style={styles.title}>Dengue</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.text}>
            {" "}
            "Texto de Exemplo Temporario" É uma doença infecciosa febril aguda,
            que pode se apresentar de forma benigna ou grave, dependendo de
            alguns fatores, entre eles: o vírus envolvido, infecção anterior
            pelo vírus da dengue e fatores individuais como doenças crônicas
            (diabetes, asma brônquica, anemia falciforme)."Fim do Texto de
            Exemplo Temporario"
          </Text>
          <View>
            <Image
              source={require("../../assets/moquito.png")}
              style={styles.img}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0e671e",
    ...Platform.select({
      android: {
        width: "100%",
        height: "15%"
      },
      web: {
        width: "100%",
        height: 150
      }
    })
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    color: "#fff",
    ...Platform.select({
      android: {
        fontSize: 70,
        marginLeft: 40
      },
      web: {
        fontSize: 90,
        marginLeft: 30,
        marginTop: 15
      }
    })
  },
  img: {
    ...Platform.select({
      android: {
        width: 210,
        height: 190,
        marginLeft: 70
      },
      web: {
        width: 550,
        height: 490,
        marginLeft: "40%",
        marginTop: "5%"
      }
    })
  },
  text: {
    ...Platform.select({
      android: {
        width: 250,
        marginLeft: 15,
        fontSize: 20,
        color: "#fff",
        width: 300,
        marginTop: 25,
        fontFamily: "Montserrat_400Regular"
      },
      web: {
        width: 700,
        fontSize: 35,
        padding: 35,
        header: "10%",
        color: "#fff",
        fontFamily: "Montserrat_400Regular"
      }
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
        flexDirection: "row",
        backgroundColor: "#48107d",
        height: "100%",
        padding: "30"
      }
    })
  }
});

export default Home;
