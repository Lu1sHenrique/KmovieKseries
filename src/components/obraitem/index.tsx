import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Obras } from '../../models/obras';
import styles from './style';
import Checkbox from "react-native-bouncy-checkbox";
import colors from '../../utils/colors';

export default function ObraItem(props: { work: Obras }) {

  const [assistido, setAssistido] = useState(false);

  function clickCheckAssistido() {
    setAssistido(!assistido)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerItems}>
        <View>
          <Image
            source={require('../../assets/Netflix-Symbol.png')}
            style={{ width: 60, height: 60, borderRadius: 10 }}
          />
        </View>

        <View style={{marginLeft: 40}}>
          <Text style={styles.title}>{props.work.titulo.substr(0, 16)}</Text>
          <Text style={styles.infos}>Tipo de mídia: {props.work.midia}</Text>
          <Text style={styles.infos}>Temporadas: {props.work.temporadas}</Text>
          <Text style={styles.infos}>Episodios: {props.work.episodios}</Text>
        </View>

        <View style={{justifyContent: 'center', width: 30, marginLeft: 50}}>
          <Checkbox
            size={25}
            fillColor={colors.black}
            textStyle={{
              textDecorationLine: "none",
              fontSize: 20,
            }}
            isChecked={assistido}
            disableBuiltInState
            onPress={clickCheckAssistido}
          />
        </View>
      </View>
    </View>
  );
};