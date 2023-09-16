import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';
import colors from '../../utils/colors';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import api from '../../services/api';
import font from '../../utils/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CadastroUsuario from '../../models/usuario';


function App(): JSX.Element {

    const [user, setUser] = useState('');

    async function saveUserCode(userCode: number) {
        await AsyncStorage.setItem('user', JSON.stringify(userCode))
    }

    type GetCadastroUsuarioResponse = {
        data: CadastroUsuario;
    };

    const navigation = useNavigation();

    const [tipo, setTipo] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSend, setIsLoadingSend] = useState(false);
    //states alerts
    const [showError, setShowError] = useState(false);
    const [showAlertConfirm, setShowAlertConfirm] = useState(false)
    const [showAlertSuccess, setShowAlertSuccess] = useState(false)
    const [showValidacaoUser, setShowValidacaoUser] = useState(false)
    const [showErroConec, setShowErroConec] = useState(false)
    const [showErrorSend, setShowErrorSend] = useState(false)
    const [showMsgErrorSend, setShowMsgErrorSend] = useState("")

    const hideAlertValidacaoUser = () => (
        setShowValidacaoUser(false)
    );

    const hideAlertSuccess = () => (
        setShowAlertSuccess(false)
    );


    async function cadastrar() {

        const cadastroUsuario = new CadastroUsuario(user);

        if (!user.length) {
            setShowValidacaoUser(true)
            setShowAlertSuccess(false)
            setShowAlertConfirm(false)
        } else {
            setIsLoadingSend(true)
            const { data, status } = await api.post<GetCadastroUsuarioResponse>('/usuario', cadastroUsuario)
                .then(function (response) {
                    setIsLoadingSend(false)
                    console.log(response)
                    setShowAlertSuccess(false)
                    setUser("")
                    setShowAlertConfirm(false)
                    navigation.navigate('Home')
                })
            await saveUserCode(data)
                .catch(function (error) {
                    setShowErrorSend(true)
                    setShowMsgErrorSend("Erro ao cadastrar: " + error.message)
                    console.error(error);
                })
        }
    }

    return (
        <View style={{ backgroundColor: colors.lightRosa, height: '100%' }}>

            <View>
                <Text>
                    insira seu usuario
                </Text>
            </View>

            <View>
                <View style={styles.lineInputIcon}>
                    <TextInput
                        placeholder='Digite seu nome'
                        placeholderTextColor={colors.gray}
                        style={styles.input}
                        onChangeText={setUser}
                        value={user}>
                    </TextInput>
                </View>
                <TouchableOpacity
                    onPress={cadastrar}
                    style={styles.button}>
                    <Text style={styles.txtButton}>
                        Avançar
                    </Text>
                </TouchableOpacity>
            </View>

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
