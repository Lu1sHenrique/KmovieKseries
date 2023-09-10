import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';
import font from '../../utils/fonts'

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20
  },

  containerItems: {
    backgroundColor: colors.white,
    marginTop: 20,
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
    paddingBottom: 10,
    fontFamily: font.fontFamily
  },

  titleAjuste: {
    marginLeft: -31,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10,
    fontFamily: font.fontFamily
  },

  infos: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '700',
    fontFamily: font.fontFamily
  },

  infosAjuste: {
    marginLeft: -31,
    color: colors.black,
    fontSize: 15,
    fontWeight: '700',
    fontFamily: font.fontFamily
  },

  containerCheck: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 30,
    marginLeft: windowWidth / 7
  },

  containerAlert: {
    width: "80%",
    borderRadius: 15
  },

  txtTitleAlert: {
    fontSize: 25,
    color: colors.black,
    textAlign: 'center'
  },

  buttonAlert: {
    width: "35%",
    marginHorizontal: 13,
    paddingVertical: 15
  },

  txtButtonAlert: {
    fontSize: 20,
    alignSelf: 'center',
    color: colors.white,
    fontFamily: 'BebasNeue-Regular'
  }
})

export default styles;