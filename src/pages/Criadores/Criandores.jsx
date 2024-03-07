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
          <View style={styles.devs}>
            <Image
              style={styles.img}
              source={require("../../assets/icon.png")}
            />
            <Text style={styles.devstext}>Daniel Lasso</Text>
          </View>

          <View style={styles.devs}>
            <Image
              style={styles.img}
              source={require("../../assets/icon.png")}
            />
            <Text style={styles.devstext}>Emily</Text>
          </View>

          <View style={styles.devs}>
            <Image
              style={styles.img}
              source={require("../../assets/icon.png")}
            />
            <Text style={styles.devstext}>Eduarda Debatin</Text>
          </View>

          <View style={styles.devs}>
            <Image
              style={styles.img}
              source={require("../../assets/icon.png")}
            />
            <Text style={styles.devstext}>Eduarda Sobral</Text>
          </View>

          <View style={styles.devs}>
            <Image
              style={styles.img}
              source={require("../../assets/icon.png")}
            />
            <Text style={styles.devstext}>Maria Eduarda</Text>
          </View>

          <View style={styles.devs}>
            <Image
              style={styles.img}
              source={require("../../assets/icon.png")}
            />
            <Text style={styles.devstext}>Mariany Da Cunha</Text>
          </View>

          <View style={styles.devs}>
            <Image
              style={styles.img}
              source={require("../../assets/icon.png")}
            />
            <Text style={styles.devstext}>Rebeca</Text>
          </View>
          <Image
            style={styles.img_devs}
            source={require("../../assets/desenvolvedores.png")}
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
        fontFamily: "Montserrat_700Bold",
        marginLeft: 10
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
        width: 30,
        height: 30,
        borderColor: "#30b193",
        borderWidth: 2,
        borderRadius: 20
      },
      web: {
        width: 60,
        height: 60,
        borderColor: "#30b193",
        borderWidth: 2,
        borderRadius: 50
      }
    })
  },
  img_devs: {
    ...Platform.select({
      android: {
        width: 350,
        height: 190
        // marginLeft: 70
      },
      web: {
        width: 800,
        height: 460,
        marginLeft: "50%",
        marginTop: -500
      }
    })
  },
  devs: {
    alignItems: "center",
    ...Platform.select({
      android: {
        flexDirection: "row",
        padding: 10
      },
      web: {
        flexDirection: "row",
        padding: 10
      }
    })
  },
  devstext: {
    ...Platform.select({
      android: {
        marginLeft: 10,
        color: "#fff"
      },
      web: {
        flexDirection: "row",
        marginLeft: 10,
        color: "#fff",
        fontSize: 20
      }
    })
  }
});
