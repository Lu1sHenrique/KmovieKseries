import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20
  },

  containerItems: {
    backgroundColor: colors.white,
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 10
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