import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import font from '../../utils/fonts';

const styles = StyleSheet.create({
    
  container: {
    backgroundColor: colors.lightRosa,
    height: '100%'
  },

  content:{
    width: '90%',
    marginTop: '5%',
    alignSelf: 'center'
  },

  containerTitle:{
    flexDirection: 'row', 
    marginTop: '25%', 
    alignSelf: 'center'
  },

  containerTitleK:{
    alignSelf:'center'
  },

  titleK:{
    fontSize:100,
    color: colors.white,
    fontFamily: font.fontFamily
  },

  titleMovies:{
    fontSize:50,
    color: colors.white,
    fontFamily: font.fontFamily
  },

  titleSeries:{
    marginTop: -15,
    fontSize:50,
    color: colors.white,
    fontFamily: font.fontFamily
  },

  input: {
    borderWidth: 1,
    height: 50,
    borderColor: colors.white,
    marginBottom: 20,
    fontSize: 19,
    borderRadius: 10,
    paddingHorizontal: 30,
    color: colors.white,
    fontFamily: font.fontFamily
  },

  inputHidePass: {
    height: 50,
    marginBottom: 12,
    fontSize: 19,
    paddingHorizontal: 30,
    color: colors.white,
    width: '85%',
    fontFamily: font.fontFamily
  },

  iconHidePass: {
    width: '15%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerHidePass: {
    flexDirection: 'row',
    height: 50,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 25
  },

  buttonLoginExtras: {
    marginTop: 15,
    alignSelf: 'center',
    width: '90%',
    height: 50,
    backgroundColor: colors.lightRosa,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.white,
    flexDirection: 'row',
  },

  image:{
    width: 30,
    height: 30,
    marginHorizontal: 30
  },

  button: {
    marginTop: 30,
    alignSelf: 'center',
    width: '90%',
    height: 50,
    backgroundColor: colors.lightRosa,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.white
  },
  
  txtButton: {
    color: colors.white,
    fontSize: 20,
  },

  containerAlert: {
    width: '80%',
    borderRadius: 15,
  },

  txtTitleAlert: {
    fontSize: 25,
    color: colors.black,
    textAlign: 'center',
  },

  buttonAlert: {
    width: '35%',
    marginHorizontal: 13,
    paddingVertical: 15,
  },

  txtButtonAlert: {
    fontSize: 20,
    alignSelf: 'center',
    color: colors.white,
    fontFamily: 'BebasNeue-Regular',
  },
});

export default styles;
