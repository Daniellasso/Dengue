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

export default function Up() {
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
            {" "}
            O Departamento de Controle de Endemias da Secretaria Municipal de
            Saúde identificou o primeiro caso positivo de dengue no município no
            início de 2024, em contraste com os 63 casos registrados no mesmo
            período do ano anterior. A agente de combate a Endemias, Lucimara
            Rodrigues Gea, enfatizou a importância do apoio da administração e
            da população nas ações preventivas para reduzir os números. O caso
            foi detectado em uma moradora da área central da cidade,
            desencadeando a realização de ações de bloqueio, como o fumacê, para
            eliminar o mosquito transmissor. Enquanto isso, a situação nacional
            revela que o Brasil ultrapassou 1 milhão de casos de dengue em 2024.
            Os dados do Ministério da Saúde mostram que Minas Gerais lidera com
            424.179 casos registrados, seguido por São Paulo com 225 mil casos.
            Outros estados como Distrito Federal, Paraná, Rio de Janeiro, Goiás
            e Espírito Santo também apresentam números significativos. A
            tendência histórica da dengue no país indica que o pico dos surtos
            geralmente ocorre entre março e abril. Em resposta à crescente
            incidência da doença, São Paulo declarou emergência de saúde pública
            por dengue após atingir 300 casos confirmados por 100 mil
            habitantes. O estado já ultrapassou os 150 mil casos confirmados em
            2024, com outros 86.099 em investigação e 38 mortes registradas. O
            governo paulista tomou essa medida após recomendações do Centro de
            Operações de Emergência (COE) da Secretaria de Estado de Saúde.
            Diante desse cenário preocupante, é fundamental intensificar as
            medidas preventivas e mobilizar esforços para controlar a propagação
            da dengue tanto a nível municipal quanto nacionalmente. A
            colaboração entre autoridades, profissionais de saúde e a população
            é essencial para combater eficazmente essa doença transmitida pelo
            mosquito Aedes aegypti.
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.lado}>
              <Image
                style={styles.img}
                source={require("../../assets/moquito.png")}
              />
              <Image
                style={styles.img}
                source={require("../../assets/municipal.jpg")}
              />
            </View>
          </View>
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
        fontSize: 70,
        fontFamily: "Montserrat_700Bold",
        marginLeft: 10
      },
      web: {
        fontSize: 90,
        fontFamily: "Montserrat_700Bold",
        marginLeft: 10
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
        fontFamily: "Montserrat_400Regular"
      },
      web: {
        width: 500,
        fontSize: 16,
        marginLeft: 55,
        marginTop: 15,
        color: "#fff",
        fontFamily: "Montserrat_400Regular"
      }
    })
  },
  img: {
    ...Platform.select({
      android: {
        width: 170,
        height: 150,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10
      },
      web: {
        width: 370,
        height: 340,
        marginTop: -500
      }
    })
  },
  lado: {
    ...Platform.select({
      android: {
        flexDirection: "row"
      },
      web: {
        marginLeft: 800,
        flexDirection: "row"
      }
    })
  }
});
