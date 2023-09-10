import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
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
import CadastroObra from './cadastroObra';
import { CadastroObras, Plataformas, Tipos } from '../../models/obras';


function App(): JSX.Element {

    const [idUsuario, setIdUsuario] = useState(0);

    async function buscarIdUsuario() {
        const user = await AsyncStorage.getItem('user');
        setIdUsuario(parseInt(user));
    }

    type GetCadastroObrasResponse = {
        data: CadastroObras[];
    };

    useEffect(() => {
        buscarIdUsuario();
        getPlataformas();
        getTipos();
    }, []);

    const navigation = useNavigation();


    const [titulo, setTitulo] = useState('');
    const [plataforma, setPlataforma] = useState('');
    const [temporadas, setTemporadas] = useState(0);
    const [episodiosPorTemporada, setEpisodiosPorTemporada] = useState(0);
    const [tipo, setTipo] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSend, setIsLoadingSend] = useState(false);
    //states alerts
    const [showError, setShowError] = useState(false);
    const [showAlertConfirm, setShowAlertConfirm] = useState(false)
    const [showAlertSuccess, setShowAlertSuccess] = useState(false)
    const [showValidacaoTitulo, setShowValidacaoTitulo] = useState(false)
    const [showValidacaoPlataforma, setShowValidacaoPlataforma] = useState(false)
    const [showValidacaoTemp, setShowValidacaoTemp] = useState(false)
    const [showErroConec, setShowErroConec] = useState(false)
    const [showValidacaoEp, setShowValidacaoEp] = useState(false)
    const [showValidacaoTipo, setShowValidacaoTipo] = useState(false)
    const [showErrorSend, setShowErrorSend] = useState(false)
    const [showMsgErrorSend, setShowMsgErrorSend] = useState("")
    const [tipos, setTipos] = useState<Tipos[]>([]);
    const [plataformas, setPlataformas] = useState<Plataformas[]>([]);


    type GetPlataformasResponse = {
        data: Plataformas[];
    };

    type GetTiposResponse = {
        data: Tipos[];
    };

    async function getPlataformas() {
        showError && setShowError(false)
        setIsLoading(true)
        try {
            const { data, status } = await api.get<GetPlataformasResponse>(
                '/plataformas',
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            );
            setIsLoading(false)
            console.log(JSON.stringify(data, null, 4));
            console.log('response status is: ', status);
            setPlataformas(data)
            return data;
        } catch (error) {
            setIsLoading(false)
            setShowError(true)
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    async function getTipos() {
        showError && setShowError(false)
        setIsLoading(true)
        try {
            const { data, status } = await api.get<GetTiposResponse>(
                '/tipos',
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            );
            setIsLoading(false)
            console.log(JSON.stringify(data, null, 4));
            console.log('response status is: ', status);
            setTipos(data)
            return data;
        } catch (error) {
            setIsLoading(false)
            setShowError(true)
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    const hideAlertValidacaoTitulo = () => (
        setShowValidacaoTitulo(false)
    );

    const hideAlertValidacaoPlat = () => (
        setShowValidacaoPlataforma(false)
    );

    const hideAlertValidacaoTemp = () => (
        setShowValidacaoTemp(false)
    );

    const hideAlertValidacaoTipo = () => (
        setShowValidacaoTipo(false)
    );

    const hideAlertValidacaoEp = () => (
        setShowValidacaoEp(false)
    );

    const hideAlertSuccess = () => (
        setShowAlertSuccess(false)
    );


    const cadastrar = async () => {

        const cadastroObra = new CadastroObra(titulo, plataforma, tipo, temporadas, episodiosPorTemporada, idUsuario, false);

        if (!titulo.length) {
            setShowValidacaoTitulo(true)
            setShowAlertSuccess(false)
            setShowAlertConfirm(false)
        } else
            if (!plataforma.length) {
                setShowValidacaoPlataforma(true)
                setShowAlertSuccess(false)
                setShowAlertConfirm(false)
            } else
                if (!tipo.length) {
                    setShowValidacaoTipo(true)
                    setShowAlertSuccess(false)
                    setShowAlertConfirm(false)
                } else
                    if (temporadas == 0) {
                        setShowValidacaoTemp(true)
                        setShowAlertSuccess(false)
                        setShowAlertConfirm(false)
                    } else
                        if (episodiosPorTemporada == 0) {
                            setShowValidacaoEp(true)
                            setShowAlertSuccess(false)
                            setShowAlertConfirm(false)
                        } else {
                            setIsLoadingSend(true)
                            await api.post<GetCadastroObrasResponse>('/series', cadastroObra)
                                .then(function (response) {
                                    setIsLoadingSend(false)
                                    console.log(response)
                                    setShowAlertSuccess(true)
                                    setTitulo("")
                                    setPlataforma('')
                                    setTipo('')
                                    setTemporadas(0)
                                    setEpisodiosPorTemporada(0)
                                    setShowAlertConfirm(false)
                                })
                                .catch(function (error) {
                                    setShowErrorSend(true)
                                    setShowMsgErrorSend("Erro ao cadastrar: " + error.message)
                                    console.error(error);
                                })
                        }
    }

    return (
        <View style={{ backgroundColor: colors.lightRosa, height: '100%' }}>
            <View style={styles.ContainerButtonBack}>
                <TouchableOpacity
                    style={styles.ButtonBack}
                    onPress={() => navigation.goBack()}
                >
                    <Icon style={styles.IconBack} name="arrowleft" size={25} />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: colors.black, fontFamily: font.fontFamily }}>Cadastro de Obras</Text>
            </View>
            {isLoading ? <ActivityIndicator style={{ flex: 1, display: 'flex' }} size="large" color={colors.white} /> : (
                <View>
                    <View style={styles.lineInputIcon}>
                        <TextInput
                            placeholder='Título'
                            placeholderTextColor={colors.gray}
                            style={styles.input}
                            onChangeText={setTitulo}
                            value={titulo}>
                        </TextInput>
                    </View>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={plataforma}
                            onValueChange={(itemValue) =>
                                setPlataforma(itemValue)
                            }
                            dropdownIconColor={colors.gray}
                            style={styles.titlePicker}
                            dropdownIconRippleColor={colors.gray}
                        >
                            <Picker.Item
                                label='Plataformas'
                                style={styles.labelPicker}
                            />
                            {
                                plataformas.map(id => {
                                    return <Picker.Item
                                        label={id.name}
                                        value={id.name}
                                        style={{
                                            color: colors.gray,
                                            fontSize: 20
                                        }}
                                        key='plataforma'
                                    />
                                })
                            }
                        </Picker>
                    </View>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={tipo}
                            onValueChange={(itemValue) =>
                                setTipo(itemValue)
                            }
                            dropdownIconColor={colors.gray}
                            dropdownIconRippleColor={colors.gray}
                            style={styles.titlePicker}
                        >
                            <Picker.Item
                                label='Tipos'
                                style={styles.labelPicker}
                            />
                            {
                                tipos.map(id => {
                                    return <Picker.Item
                                        label={id.name}
                                        value={id.name}
                                        style={{
                                            color: colors.gray,
                                            fontSize: 20
                                        }}
                                        key='tipo'
                                    />
                                })
                            }
                        </Picker>
                    </View>

                    {
                        tipo != "Filme" ?
                            <>
                                <View style={styles.lineInputIcon}>
                                    <TextInput
                                        keyboardType='numeric'
                                        placeholder='Temporadas'
                                        placeholderTextColor={colors.gray}
                                        style={styles.input}
                                        onChangeText={text => setTemporadas(text)}
                                        value={temporadas}>
                                    </TextInput>
                                </View>
                                <View style={styles.lineInputIcon}>
                                    <TextInput
                                        keyboardType='numeric'
                                        placeholder='Episódios por temporada'
                                        placeholderTextColor={colors.gray}
                                        style={styles.input}
                                        onChangeText={setEpisodiosPorTemporada}
                                        value={episodiosPorTemporada}>
                                    </TextInput>
                                </View>
                            </>
                            :
                            null
                    }

                    <TouchableOpacity
                        onPress={cadastrar}
                        style={styles.button}>
                        <Text style={styles.txtButton}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

            <AwesomeAlert
                contentContainerStyle={styles.containerAlert}
                confirmButtonStyle={styles.buttonAlert}
                confirmButtonTextStyle={styles.txtButtonAlert}
                messageStyle={styles.txtTitleAlert}
                show={showAlertSuccess}
                showProgress={false}
                message="Obra cadastrada com sucesso!😁✅"
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
                show={showValidacaoTitulo}
                showProgress={false}
                message="⚠️Digite um título"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText="Ok"
                confirmButtonColor={colors.black}
                onConfirmPressed={() => {
                    hideAlertValidacaoTitulo();
                }}
            />

            <AwesomeAlert
                contentContainerStyle={styles.containerAlert}
                confirmButtonStyle={styles.buttonAlert}
                confirmButtonTextStyle={styles.txtButtonAlert}
                messageStyle={styles.txtTitleAlert}
                show={showValidacaoPlataforma}
                showProgress={false}
                message="⚠️Selecione uma plataforma"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText="Ok"
                confirmButtonColor={colors.black}
                onConfirmPressed={() => {
                    hideAlertValidacaoPlat();
                }}
            />

            <AwesomeAlert
                contentContainerStyle={styles.containerAlert}
                confirmButtonStyle={styles.buttonAlert}
                confirmButtonTextStyle={styles.txtButtonAlert}
                messageStyle={styles.txtTitleAlert}
                show={showValidacaoTipo}
                showProgress={false}
                message="⚠️Selecione um tipo"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText="Ok"
                confirmButtonColor={colors.black}
                onConfirmPressed={() => {
                    hideAlertValidacaoTipo();
                }}
            />

            <AwesomeAlert
                contentContainerStyle={styles.containerAlert}
                confirmButtonStyle={styles.buttonAlert}
                confirmButtonTextStyle={styles.txtButtonAlert}
                messageStyle={styles.txtTitleAlert}
                show={showValidacaoTemp}
                showProgress={false}
                message="⚠️Digite a quantidade de temporadas"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText="Ok"
                confirmButtonColor={colors.black}
                onConfirmPressed={() => {
                    hideAlertValidacaoTemp();
                }}
            />

            <AwesomeAlert
                contentContainerStyle={styles.containerAlert}
                confirmButtonStyle={styles.buttonAlert}
                confirmButtonTextStyle={styles.txtButtonAlert}
                messageStyle={styles.txtTitleAlert}
                show={showValidacaoEp}
                showProgress={false}
                message="⚠️Digite a quantidade de episódios"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText="Ok"
                confirmButtonColor={colors.black}
                onConfirmPressed={() => {
                    hideAlertValidacaoEp();
                }}
            />
        </View>
    );
}

export default App;
