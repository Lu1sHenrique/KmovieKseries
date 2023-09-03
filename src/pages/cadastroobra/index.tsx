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
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'
import api from '../../services/api'

const plataformas = [
    { id: 1, nome: 'NetFlix' },
    { id: 2, nome: 'Disney Plus' },
    { id: 3, nome: 'HBO Max' },
    { id: 4, nome: 'Telegram' },
    { id: 5, nome: 'Amazon Prime' }
];

const tipos = [
    { id: 1, nome: 'Série' },
    { id: 2, nome: 'Documentário' },
    { id: 3, nome: 'Anime' },
    { id: 4, nome: 'Filme' },
    { id: 5, nome: 'Musical' }
];


function App(): JSX.Element {

    const navigation = useNavigation();


    const [titulo, setTitulo] = useState('');
    const [plataforma, setPlataforma] = useState('');
    const [temporadas, setTemporadas] = useState(0);
    const [episodiosPorTemporada, setEpisodiosPorTemporada] = useState('');
    const [tipo, setTipo] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showError, setShowError] = useState(false);

    return (
        <View style={{ backgroundColor: colors.lightRosa, height: '100%' }}>
            <View style={styles.ContainerButtonBack}>
                <TouchableOpacity
                    style={styles.ButtonBack}
                    onPress={() => navigation.goBack()}
                >
                    <Icon style={styles.IconBack} name="arrowleft" size={30} />
                </TouchableOpacity>
                <Text style={{ fontSize: 30, color: colors.gray }}>Cadastro de Obras</Text>
            </View>
            {isLoading ? <ActivityIndicator style={{ flex: 1, display: 'flex' }} size="large" color={colors.white} /> : (
                <View>
                    <View style={styles.lineInputIcon}>
                        <TextInput
                            placeholder='Título'
                            placeholderTextColor={colors.gray}
                            style={styles.input}
                            onChangeText={setTitulo}>
                        </TextInput>
                    </View>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={plataforma}
                            onValueChange={(itemValue) =>
                                setPlataforma(itemValue)
                            }
                            dropdownIconColor={colors.gray}
                            style={{marginLeft: 10, color: colors.gray}}
                            dropdownIconRippleColor={colors.gray}
                        >
                            <Picker.Item
                                label='Plataformas'
                                style={{
                                    color: colors.black,
                                    fontSize: 20
                                }}
                            />
                            {
                                plataformas.map(id => {
                                    return <Picker.Item
                                        label={id.nome.replaceAll('+', ' ')}
                                        value={id.nome}
                                        style={{
                                            color: colors.gray
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
                            style={{marginLeft: 10, color: colors.gray}}
                        >
                            <Picker.Item
                                label='Tipos'
                                style={{
                                    color: colors.black,
                                    fontSize: 20
                                }}
                            />
                            {
                                tipos.map(id => {
                                    return <Picker.Item
                                        label={id.nome.replaceAll('+', ' ')}
                                        value={id.nome}
                                        style={{
                                            color: colors.gray
                                        }}
                                        key='tipo'
                                    />
                                })
                            }
                        </Picker>
                    </View>
                    <View style={styles.lineInputIcon}>
                        <TextInput
                            keyboardType='numeric'
                            placeholder='Temporadas'
                            placeholderTextColor={colors.gray}
                            style={styles.input}
                            onChangeText={text => setTemporadas(text)}>
                        </TextInput>
                    </View>
                    <View style={styles.lineInputIcon}>
                        <TextInput
                            keyboardType='numeric'
                            placeholder='Episódios por temporada'
                            placeholderTextColor={colors.gray}
                            style={styles.input}
                            onChangeText={setEpisodiosPorTemporada}>
                        </TextInput>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.txtButton}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

export default App;
