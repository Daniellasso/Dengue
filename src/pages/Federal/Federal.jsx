import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Image
} from "react-native";
import React from "react";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";

export default function Federal() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });
  if (!fontsLoaded) {
    return;
  } else {
    return (
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Dengue</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>
            O Brasil passou de 1 milhão de casos (prováveis e confirmados) de
            dengue em 2024. Segundo dados do Painel de Arboviroses do Ministério
            da Saúde desta quinta-feira (29), o país registrou 1.017.278 casos
            nas primeiras oito semanas deste ano.
            {`

`}
            O Ministério da Saúde e Bem-Estar disse que a proporção de pessoas
            infectadas era de cerca de 55,5% de mulheres e 44,5% de homens.
            Considerando a tendência histórica da dengue em nosso país,
            diferentemente da situação atual, o pico dos surtos de arboviroses
            geralmente ocorre entre março e abril. Entre os estados com maior
            número de casos, Minas Gerais lidera com 424.179 registrados. Na
            ordem, destacam-se São Paulo (225 mil), Distrito Federal (118.895),
            Paraná (123.288), Rio de Janeiro (95.700), Goiás (72.222) e Espírito
            Santo (46.229). Hoje, o estado de São Paulo declarou emergência de
            saúde pública por dengue, seguindo recomendações do Centro de
            Operações de Emergência (COE). A medida ocorre no momento em que os
            casos confirmados do vírus atingem 300 por 100 mil habitantes nesta
            segunda-feira (4). 201 governos locais em todo o Brasil declararam
            estado de emergência.
          </Text>
          <Image
            style={styles.img}
            source={require("../../assets/casos de dengue Brasil.png")}
          />
        </View>
      </ScrollView>
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
    color: "#fff",
    marginTop: 20,
    ...Platform.select({
      android: {
        fontSize: 70,
        fontFamily: "Montserrat_700Bold",
        marginLeft: 15
      },
      web: {
        fontSize: 90,
        fontFamily: "Montserrat_700Bold"
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
        backgroundColor: "#48107d",
        height: "490%"
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
        fontSize: 20,
        marginLeft: 55,
        marginTop: 15,
        // marginLeft: -900,
        color: "#fff",
        fontFamily: "Montserrat_400Regular"
      }
    })
  },
  img: {
    ...Platform.select({
      android: {
        width: 200,
        height: 200,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 70
      },
      web: {
        width: 550,
        height: 540,
        marginLeft: "40%",
        marginTop: -600
      }
    })
  }
});
