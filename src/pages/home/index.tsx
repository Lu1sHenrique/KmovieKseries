import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  FlatList,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import ObraItem from '../../components/obraitem';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';
import colors from '../../utils/colors';


const data = [
  { id: 1, titulo: 'Breaking Bad', temporadas: 5, episodios: 200, midia: 'Série', plataforma: 'Netflix' },
  { id: 2, titulo: 'Stranger Things', temporadas: 13, episodios: 200, midia: 'Série', plataforma: 'Netflix' },
  { id: 3, titulo: 'Game of Thrones', temporadas: 5, episodios: 200, midia: 'Série', plataforma: 'HBO Max' },
  { id: 4, titulo: 'Chernobyl', temporadas: 5, episodios: 200, midia: 'Série', plataforma: 'HBO Max' },
  { id: 5, titulo: 'React Native Group', temporadas: 5, episodios: 200, midia: 'Série', plataforma: 'Telegram' },
  { id: 6, titulo: 'Sample Telegram Channel', temporadas: 5, episodios: 200, midia: 'Série', plataforma: 'Telegram' },
];

function App(): JSX.Element {

  const [searchObra, setSearchObra] = useState('');

  return (
    <View style={{backgroundColor: colors.lightRosa, height: '100%' }}>
      <ScrollView>
        <View>
          <View style={{ marginVertical: 20 }}>
            <View style={styles.lineInputIcon}>
              <TextInput
                placeholder='Search'
                placeholderTextColor={colors.gray}
                style={styles.input}
                onChangeText={setSearchObra}>
              </TextInput>
              <TouchableOpacity style={styles.areaButton}>
                <Icon name='plus' size={25} color={colors.black} />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            style={styles.list}
            data={data.filter(val => {
              if (searchObra === '') {
                return val
              } else if (val.titulo.toLocaleLowerCase()
                .includes(searchObra.toLocaleLowerCase())) {
                return val
              }
            })}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ObraItem work={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
