import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ObraItem = ({ work }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{work.title}</Text>
      <Text style={styles.media}>Tipo de media: {work.title}</Text>
      {work.title == "teste" ? (
        <>
          <Text>Texto exibido quando a condição é verdadeira - Parte 1</Text>
          <Text>Texto exibido quando a condição é verdadeira - Parte 2</Text>
        </>
      ) : (
        <Text>Texto exibido quando a condição é falsa</Text>
      )}
      <Text style={styles.media}>Temporadas: {work.title}</Text>
      <Text style={styles.media}>Episodios: {work.title}</Text>
      <Text style={styles.platform}>{work.platform}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  platform: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ObraItem;
