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
import { Obras } from '../../models/obras';

function App(): JSX.Element {

  const navigation = useNavigation();

  useEffect(() => {
    getSeries()
  }, [])

  const onRefresh = () => {
    setRefreshing(false);
    getSeries();
  }

  type GetObrasResponse = {
    data: Obras[];
  };

  const [searchObra, setSearchObra] = useState('');
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [refreshing, setRefreshing] = useState(false)

  async function getSeries() {
    showError && setShowError(false)
    setIsLoading(true)
    try {
      const { data, status } = await api.get<GetObrasResponse>(
        '/series',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      setIsLoading(false)
      console.log(JSON.stringify(data, null, 4));
      console.log('response status is: ', status);
      setSeries(data)
      return data;
    } catch (error) {
      setIsLoading(false)
      setShowError(true)
      console.log(error);
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
              data={series.filter(val => {
                if (searchObra === '') {
                  return val
                } else if (val.titulo.toLocaleLowerCase()
                  .includes(searchObra.toLocaleLowerCase())) {
                  return val
                }
              })}
              keyExtractor={(item) => item}
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
