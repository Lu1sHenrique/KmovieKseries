import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';


const styles = StyleSheet.create({
    lineInputIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        height: 50,
        borderRadius: 25,
        width: '95%',
        alignSelf: 'center',
        marginVertical: 15
    },

    input: {
        flex: 1,
        marginStart: 20,
        fontSize: 20,
        color: colors.gray
    },

    ContainerButtonBack: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },

    ButtonBack: {
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginHorizontal: 20
    },

    IconBack: {
        color: colors.black
    },

    button: {
        marginTop: 15,
        alignSelf: 'center',
        width: '95%',
        height: 50,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

    txtButton: {
        color: colors.gray,
        fontSize: 25
    },

    picker: {
        backgroundColor: colors.white,
        width: '95%',
        alignSelf: 'center',
        color: colors.gray,
        marginVertical: 15,
        borderRadius: 30,
        height: 50
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
});

export default styles;