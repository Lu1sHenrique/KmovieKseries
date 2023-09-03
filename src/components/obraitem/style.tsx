import { Dimensions , StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  },

  containerItems: {
    backgroundColor: colors.white,
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row'
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10
  },

  platform: {
    fontSize: 14,
    color: 'black',
    padding: 10
  },

  infos: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '500'
  }
})

export default styles;