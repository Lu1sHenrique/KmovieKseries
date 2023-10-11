import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import styles from './style';
import colors from '../../utils/colors';
import AwesomeAlert from 'react-native-awesome-alerts';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CadastroUsuario from '../../models/usuario';

function App(): JSX.Element {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  async function saveUserCode(userCode: number) {
    await AsyncStorage.setItem('user', JSON.stringify(userCode));
  }

  type GetCadastroUsuarioResponse = {
    data: CadastroUsuario;
  };

  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSend, setIsLoadingSend] = useState(false);
  //states alerts
  const [showError, setShowError] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showValidacaoUser, setShowValidacaoUser] = useState(false);
  const [showErroConec, setShowErroConec] = useState(false);
  const [showErrorSend, setShowErrorSend] = useState(false);
  const [showMsgErrorSend, setShowMsgErrorSend] = useState('');
  const [hidePass, setHidePass] = useState(true);

  const hideAlertValidacaoUser = () => setShowValidacaoUser(false);

  const hideAlertSuccess = () => setShowAlertSuccess(false);

  async function login() {
    const cadastroUsuario = new CadastroUsuario(user);

    if (!user.length) {
      setShowValidacaoUser(true);
      setShowAlertSuccess(false);
    } else {
      setIsLoadingSend(true);
      const {data} = await api
        .post<GetCadastroUsuarioResponse>('/usuario', cadastroUsuario)
        .then(function (response) {
          setIsLoadingSend(false);
          console.log(response);
          setShowAlertSuccess(false);
          setUser('');
          navigation.navigate('Home');
        });
      await saveUserCode(data).catch(function (error) {
        setShowErrorSend(true);
        setShowMsgErrorSend('Erro ao cadastrar: ' + error.message);
        console.error(error);
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <View style={styles.containerTitleK}>
          <Text style={styles.titleK}>K</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.titleMovies}>movies</Text>
          <Text style={styles.titleSeries}>series</Text>
        </View>
      </View>

      <View style={styles.content}>
        <TextInput
          placeholder="Insira o usuário"
          placeholderTextColor={colors.white}
          style={styles.input}
          onChangeText={text => setUser(text)}
          value={user}
        />

        <View style={styles.containerHidePass}>
          <TextInput
            placeholder="Insira a senha"
            placeholderTextColor={colors.white}
            style={styles.inputHidePass}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={hidePass}
          />
          <TouchableOpacity
            style={styles.iconHidePass}
            onPress={() => setHidePass(!hidePass)}>
            {hidePass ? (
              <IconFeather name="eye" size={23} color={colors.white} />
            ) : (
              <IconFeather name="eye-off" size={23} color={colors.white} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={login} style={styles.buttonLoginExtras}>
        <Image
          source={require('../../assets/images/logo_f.png')}
          style={styles.image}
        />
        <Text style={styles.txtButton}>Acessar com Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={login} style={styles.buttonLoginExtras}>
        <Image
          source={require('../../assets/images/logo_g.png')}
          style={styles.image}
        />
        <Text style={styles.txtButton}>Acessar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.txtButton}>Avançar</Text>
      </TouchableOpacity>

      <AwesomeAlert
        contentContainerStyle={styles.containerAlert}
        confirmButtonStyle={styles.buttonAlert}
        confirmButtonTextStyle={styles.txtButtonAlert}
        messageStyle={styles.txtTitleAlert}
        show={showAlertSuccess}
        showProgress={false}
        message="Usuário cadastrado com sucesso!😁✅"
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
        confirmButtonStyle={styles.buttonAlert}
        confirmButtonTextStyle={styles.txtButtonAlert}
        messageStyle={styles.txtTitleAlert}
        show={showValidacaoUser}
        showProgress={false}
        message="⚠️Digite um usuário"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor={colors.black}
        onConfirmPressed={() => {
          hideAlertValidacaoUser();
        }}
      />
    </View>
  );
}

export default App;
