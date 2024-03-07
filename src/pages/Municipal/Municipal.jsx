import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView
} from "react-native";
import React from "react";

export default function Municipal() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Dengue</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>
          O Departamento de Controle de Endemias, órgão da Secretaria Municipal
          de Saúde, responsável pela prevenção e controle de doenças no
          município, informou nesta terça-feira (06), o primeiro caso positivo
          da dengue no município neste início de 2024. Conforme a agente de
          combate a Endemias, Lucimara Rodrigues Gea, neste mesmo período do ano
          passado, 63 casos foram registrados. “Não podemos ficar confortáveis
          com essa situação, longe disso, mas acredito que o apoio da
          administração nas constantes ações preventivas, ajudaram na redução
          desses números. Estamos trabalhando de forma intensificada para
          tentarmos manter a doença sob controle no município, por isso
          continuamos pedindo o apoio da população”, destaca. Ainda de acordo
          com Mara, o caso positivo foi identificado em uma moradora da área
          central da cidade, e hoje o os funcionários do setor iniciaram o
          trabalho de bloqueio, realizando o fumacê nas residências e
          estabelecimentos dos quarteirões adjacentes do local a fim de liquidar
          o mosquito transmissor da doença. Na data de hoje, Santo Anastácio se
          encontra em estado de ALERTA em relação ao relatório de índice
          larvário (ADL), realizado pela equipe de endemias. "Nosso IP – está em
          1,28 e o IB – em 1,46, o satisfatório seria de 1, mas vamos continuar
          trabalhando para mantermos um bom resultado".
        </Text>
        <View style={{ flexDirection: "row", marginLeft: -10 }}>
          <Image
            source={require("../../assets/municipal.jpg")}
            style={styles.img}
          />
          <Image
            source={require("../../assets/municipal_detetizacao.jpg")}
            style={styles.img}
          />
        </View>
      </View>
    </ScrollView>
  );
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
        width: 170,
        height: 150,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 70
      },
      web: {
        width: 350,
        height: 290,
        marginLeft: "10%",
        marginTop: "5%"
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
        fontSize: 15,
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
        height: "100%",
        padding: 20
      },
      web: {
        flexDirection: "row",
        backgroundColor: "#48107d",
        height: "145%",
        padding: "30"
      }
    })
  }
});
