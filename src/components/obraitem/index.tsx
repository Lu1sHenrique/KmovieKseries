import React, {useState, useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {Obras} from '../../models/obras';
import styles from './style';
import Checkbox from 'react-native-bouncy-checkbox';
import colors from '../../utils/colors';
import api from '../../services/api';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import IconFA from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useNavigation } from '@react-navigation/native'

interface Props {
  work?: Obras, 
  onRefresh?: (() => void) | undefined
} 

export default function ObraItem({work, onRefresh}: Props) {

  const navigation = useNavigation();

  const swipeableRef = useRef(null);

  const [assistido, setAssistido] = useState(work?.assistido);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showErrorSend, setShowErrorSend] = useState(false);
  const [showMsgErrorSend, setShowMsgErrorSend] = useState('');
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);
  const [isLoadingSend, setIsLoadingSend] = useState(false);

  const hideAlertSuccess = () => setShowAlertSuccess(false);

  function hideAlertConfirm() {
    setShowAlertConfirm(false);
    swipeableRef.current.close();
  }

  type GetCheckAssistido = {
    data: string;
  };

  function LeftActions() {
    return (
      <View style={styles.containerLeftAction}>
        <IconFA style={styles.iconAction} name="edit" size={30} />
      </View>
    );
  }

  function RightActions() {
    return (
      <View style={styles.containerRightAction}>
        <IconFA style={styles.iconAction} name="trash" size={30} />
      </View>
    );
  }

  function alterarCheckList() {
    console.log(work)
    swipeableRef.current.close();
    navigation.navigate('CadastroObra', props={work});
  }

  const checkAssistido = async () => {
    setAssistido(!assistido);
    await api
      .put<GetCheckAssistido>(
        '/series/' +
          !assistido +
          '/' +
          work.titulo +
          '/' +
          work.idTipo,
      )
      .then(function (response: string) {
        setShowAlertSuccess(true);
        console.log(response);
      })
      .catch(function (error) {
        setShowErrorSend(true);
        setShowMsgErrorSend('Erro ao alterar status da obra: ' + error.message);
        console.error(error);
      });
  };

  const excluirObra = async () => {
    setIsLoadingSend(true);
    await api
      .delete<void>('/series/' + work?.titulo + '/' + work?.idTipo)
      .then(function (response: void) {
        console.log(response);
      })
      .catch(function (error) {
        setShowErrorSend(true);
        setShowMsgErrorSend('Erro ao excluir obra: ' + error.message);
        console.error(error);
      });
    swipeableRef.current.close();
    hideAlertConfirm();
    onRefresh();
  };

  return (
    <Swipeable
      ref={swipeableRef}
      renderLeftActions={LeftActions}
      renderRightActions={RightActions}
      onSwipeableLeftOpen={alterarCheckList}
      onSwipeableRightOpen={exibirAlertaExcluir}>
      <View style={styles.container}>
        <View style={styles.containerItems}>
          <View>
            <Image
              source={{uri: work?.urlLogo}}
              style={{width: 60, height: 60, borderRadius: 10}}
            />
          </View>

          <View>
            <Text style={styles.title}>{work?.titulo.substr(0, 16)}</Text>
            <Text style={styles.infos}>Tipo: {work?.tipo}</Text>
            <Text style={styles.infos}>
              Temporadas: {work?.temporadas}
            </Text>
            <Text style={styles.infos}>
              Episodios: {work?.episodiosPorTemporada}
            </Text>
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

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          cancelButtonStyle={styles.buttonAlert}
          confirmButtonStyle={styles.buttonAlert}
          cancelButtonTextStyle={styles.txtButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showAlertConfirm}
          progressColor={colors.lightRosa}
          message={
            isLoadingSend ? '🖐️Excluindo' : 'Tem certeza que deseja excluir?'
          }
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={isLoadingSend ? false : true}
          showConfirmButton={isLoadingSend ? false : true}
          cancelText="Não"
          confirmText="Sim"
          confirmButtonColor={colors.lightRosa}
          cancelButtonColor={colors.gray}
          onCancelPressed={() => {
            hideAlertConfirm();
          }}
          onConfirmPressed={excluirObra}
        />
      </View>
    </Swipeable>
  );

  function exibirAlertaExcluir() {
    setShowAlertConfirm(true);
  }
}
