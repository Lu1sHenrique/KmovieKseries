import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import font from '../../utils/fonts'


const styles = StyleSheet.create({
    lineInputIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        height: 50,
        borderRadius: 25,
        width: '95%',
        alignSelf: 'center'
    },

    input: {
        flex: 1,
        marginStart: 20,
        fontSize: 20,
        color: colors.gray,
        fontFamily: font.fontFamily
    },

    list: {
        marginHorizontal: 10,
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: colors.white
    },

    areaButton: {
        marginEnd: 10,
        backgroundColor: colors.lightRosa,
        height: 35,
        width: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textObraNull: {
        marginTop: 15,
        fontSize: 25,
        fontFamily: font.fontFamily,
        color: colors.gray
    }
});

export default styles;