import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Obras } from '../../models/obras';
import styles from './style';
import Checkbox from "react-native-bouncy-checkbox";
import colors from '../../utils/colors';
import api from '../../services/api';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function ObraItem(props: { work: Obras }) {


  const [assistido, setAssistido] = useState(props.work.assistido);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showErrorSend, setShowErrorSend] = useState(false)
  const [showMsgErrorSend, setShowMsgErrorSend] = useState("")

  const hideAlertSuccess = () => (
    setShowAlertSuccess(false)
  );

  type GetCheckAssistido = {
    data: string;
  };

  const checkAssistido = async () => {
    setAssistido(!assistido)
    await api.put<GetCheckAssistido>('/series/' + !assistido + '/'+ props.work.titulo + '/' + props.work.idTipo)
      .then(function (response: string) {
        setShowAlertSuccess(true)
        console.log(response)
      })
      .catch(function (error) {
        setShowErrorSend(true)
        setShowMsgErrorSend("Erro ao alterar status da obra: " + error.message)
        console.error(error);
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerItems}>
        <View>
          <Image
            source={{ uri: props.work.urlLogo }}
            style={{ width: 60, height: 60, borderRadius: 10 }}
          />
        </View>

        <View>
          {
            props.work.titulo.length > 14 || props.work.titulo.length < 10 ?
              <>
                <Text style={styles.title}>{props.work.titulo.substr(0, 16)}</Text>
                <Text style={styles.infos}>Tipo: {props.work.tipo}</Text>
                <Text style={styles.infos}>Temporadas: {props.work.temporadas}</Text>
                <Text style={styles.infos}>Episodios: {props.work.episodiosPorTemporada}</Text>
              </>
              :
              <>
                <Text style={styles.titleAjuste}>{props.work.titulo.substr(0, 16)}</Text>
                <Text style={styles.infosAjuste}>Tipo: {props.work.tipo}</Text>
                <Text style={styles.infosAjuste}>Temporadas: {props.work.temporadas}</Text>
                <Text style={styles.infosAjuste}>Episodios: {props.work.episodiosPorTemporada}</Text>
              </>
          }
        </View>

        <View style={styles.containerCheck}>
          <Checkbox
            size={25}
            fillColor={colors.black}
            textStyle={{
              fontSize: 20,
            }}
            isChecked={assistido}
            disableBuiltInState
            onPress={checkAssistido}
          />
        </View>
      </View>

      <AwesomeAlert
        contentContainerStyle={styles.containerAlert}
        confirmButtonStyle={styles.buttonAlert}
        confirmButtonTextStyle={styles.txtButtonAlert}
        messageStyle={styles.txtTitleAlert}
        show={showAlertSuccess}
        showProgress={false}
        message="Status alterado com sucesso!😁✅"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor={colors.black}
        onConfirmPressed={() => {
          hideAlertSuccess();
        }}
      />
    </View>
  );
};
