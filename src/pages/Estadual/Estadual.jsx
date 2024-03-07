import { StyleSheet, Text, View, Platform, Image } from "react-native";
import React from "react";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";

export default function Estadual() {
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
            Novo boletim da Secretaria de Saúde de São Paulo publicado nesta
            quarta-feira (6) mostrou que o estado ultrapassou os 150 mil casos
            em 2024. Ao todo, são 152.471 casos confirmados e outros 86.099
            estão em investigação. São 38 mortes pela doença.
            {` 

`}
            O governo de São Paulo declarou emergência de dengue. A decisão foi
            tomada pelo Centro de Operações de Emergência (EOC) da Secretaria de
            Estado de Saúde e foi confirmada oficialmente esta manhã. A previsão
            é que o decreto seja publicado no Diário Oficial ainda nesta
            terça-feira. (5) A medida foi tomada depois que São Paulo atingiu
            300 casos confirmados da doença por 100 mil habitantes na
            segunda-feira (4).
          </Text>
          <Image
            style={styles.img}
            source={require("../../assets/casos de dengue.png")}
          />
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
        height: "10%"
      },
      web: {
        width: "100%",
        height: 150
      }
    })
  },
  title: {
    color: "#fff",
    marginTop: 20,
    ...Platform.select({
      android: {
        fontSize: 50,
        fontFamily: "Montserrat_700Bold",
        marginLeft: 10
      },
      web: {
        fontSize: 70,
        fontFamily: "Montserrat_700Bold"
      }
    })
  },
  text: {
    ...Platform.select({
      android: {
        width: 150,
        fontSize: 15,
        color: "#fff",
        width: 300,
        // marginTop: -155,
        fontFamily: "Montserrat_400Regular"
      },
      web: {
        width: 500,
        fontSize: 25,
        marginLeft: 55,
        marginTop: 15,
        // marginLeft: -900,
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
        height: "145%",
        padding: 20
      },
      web: {
        backgroundColor: "#48107d",
        height: "490%"
      }
    })
  },
  img: {
    ...Platform.select({
      android: {
        width: 230,
        height: 220
        // marginLeft: 70
      },
      web: {
        width: 550,
        height: 540,
        marginLeft: "40%",
        marginTop: -500
      }
    })
  }
});
