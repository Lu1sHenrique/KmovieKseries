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
    borderBottomWidth: 1,
    paddingBottom: 10
  },

  title: {
    marginLeft: 25,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10,
    fontFamily: font.fontFamily
  },

  infos: {
    marginLeft: 25,
    color: colors.black,
    fontSize: 15,
    fontWeight: '700',
    fontFamily: font.fontFamily
  },

  containerLeftAction:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 125,
    width: 60,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },

  containerRightAction:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 125,
    width: 75,
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },

  iconAction:{
    color: colors.gray
  },

  containerCheck: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 30
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