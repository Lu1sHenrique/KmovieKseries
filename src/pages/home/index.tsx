import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  FlatList,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import ObraItem from '../../components/obraitem';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import styles from './style';
import colors from '../../utils/colors';
import api from '../../services/api';

const dataMock = [
  { idUsuario: 1, titulo: 'Breaking Bad', temporadas: 5, episodios: 200, midia: 'Série', plataforma: 'Netflix' },
  { idUsuario: 2, titulo: 'Stranger Things', temporadas: 13, episodios: 200, midia: 'Série', plataforma: 'Netflix' },
  { idUsuario: 3, titulo: 'Game of Thrones', temporadas: 5, episodios: 200, midia: 'Série', plataforma: 'HBO Max' },
  { idUsuario: 4, titulo: 'Chernobyl', temporadas: 5, episodios: 200, midia: 'Série', plataforma: 'HBO Max' },
  { idUsuario: 5, titulo: 'React Native Group', temporadas: 5, episodios: 200, midia: 'Série', plataforma: 'Telegram' },
  { idUsuario: 6, titulo: 'Sample Telegram Channel', temporadas: 5, episodios: 200, midia: 'Série', plataforma: 'Telegram' },
];


function App(): JSX.Element {

  const navigation = useNavigation();

  useEffect(() => {
    getSeries()
  }, [])

  const onRefresh = () => {
    setRefreshing(false);
    getSeries();
  }


  const [searchObra, setSearchObra] = useState('');
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [refreshing, setRefreshing] = useState(false)

  const getSeries = async () => {
    showError && setShowError(false)
    setIsLoading(true)
    try {
      const { data } = await api.get('/series')
      setIsLoading(false)
      console.log(data)
      setSeries(data)
    } catch (error) {
      setIsLoading(false)
      setShowError(true)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={{ backgroundColor: colors.lightRosa, height: '100%' }}>
      <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[colors.lightRosa]} />
      }>
        <View>
          <View style={{ marginVertical: 20 }}>
            <View style={styles.lineInputIcon}>
              <TextInput
                placeholder='Search'
                placeholderTextColor={colors.gray}
                style={styles.input}
                onChangeText={setSearchObra}>
              </TextInput>
              <TouchableOpacity 
              onPress={() => navigation.navigate('CadastroObra')}
              style={styles.areaButton}>
                <Icon name='plus' size={25} color={colors.black} />
              </TouchableOpacity>
            </View>
          </View>

          {isLoading ? <ActivityIndicator style={{ flex: 1, display: 'flex'}} size="large" color={colors.white} /> : (
            <FlatList
              style={styles.list}
              data={dataMock.filter(val => {
                if (searchObra === '') {
                  return val
                } else if (val.titulo.toLocaleLowerCase()
                  .includes(searchObra.toLocaleLowerCase())) {
                  return val
                }
              })}
              keyExtractor={(item) => item.idUsuario.toString()}
              renderItem={({ item }) => <ObraItem work={item} />}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
