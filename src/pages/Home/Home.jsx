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
            Bem-vindo ao nosso site dedicado à conscientização e prevenção da
            dengue, uma doença viral transmitida por mosquitos que representa um
            sério problema de saúde pública em muitas regiões do mundo. Aqui,
            você encontrará informações essenciais sobre a dengue, seus
            sintomas, métodos de prevenção e tratamento, além de dicas práticas
            para proteger você e sua comunidade contra essa enfermidade.
            Junte-se a nós na luta contra a dengue, pois a informação e a
            prevenção são as melhores armas para combater essa doença. Vamos
            juntos construir um ambiente mais saudável e seguro para todos!
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
        width: 180,
        height: 150,
        marginLeft: 90,
        marginTop: 50
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
        fontSize: 15,
        color: "#fff",
        width: 300,
        marginTop: 25,
        fontFamily: "Montserrat_400Regular"
      },
      web: {
        width: 700,
        fontSize: 28,
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
