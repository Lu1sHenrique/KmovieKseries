import React from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import ObraItem from './src/componente/ObraItem';


const data = [
  { id: 1, title: 'Breaking Bad', platform: 'Netflix' },
  { id: 2, title: 'Stranger Things', platform: 'Netflix' },
  { id: 3, title: 'Game of Thrones', platform: 'HBO Max' },
  { id: 4, title: 'Chernobyl', platform: 'HBO Max' },
  { id: 5, title: 'React Native Group', platform: 'Telegram' },
  { id: 6, title: 'Sample Telegram Channel', platform: 'Telegram' },
];

function App(): JSX.Element {
  return (
     <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', margin: 20 }}>
          Lista de Obras
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ObraItem work={item} />}
        />
      </View>
  );
}

export default App;
