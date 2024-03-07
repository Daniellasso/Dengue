import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Regional() {
  return (
    <View>
      <Image soucer={require('../assets/municipal.jpg')} />
      <Text>O Departamento de Controle de Endemias, órgão da Secretaria Municipal de Saúde, responsável pela prevenção e controle de doenças no município, informou nesta terça-feira (06), o primeiro caso positivo da dengue no município neste início de 2024.

Conforme a agente de combate a Endemias, Lucimara Rodrigues Gea, neste mesmo período do ano passado, 63 casos foram registrados.

“Não podemos ficar confortáveis com essa situação, longe disso, mas acredito que o apoio da administração nas constantes ações preventivas, ajudaram na redução desses números. Estamos trabalhando de forma intensificada para tentarmos manter a doença sob controle no município, por isso continuamos pedindo o apoio da população”, destaca.

Ainda de acordo com Mara, o caso positivo foi identificado em uma moradora da área central da cidade, e hoje o os funcionários do setor iniciaram o trabalho de bloqueio, realizando o fumacê nas residências e estabelecimentos dos quarteirões adjacentes do local a fim de liquidar o mosquito transmissor da doença.

Na data de hoje, Santo Anastácio se encontra em estado de ALERTA em relação ao relatório de índice larvário (ADL), realizado pela equipe de endemias.
"Nosso IP – está em 1,28 e o IB – em 1,46, o satisfatório seria de 1, mas vamos continuar trabalhando para mantermos um bom resultado".</Text>
      <Image soucer={require('../assets/municipal_detetizacao.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({});
