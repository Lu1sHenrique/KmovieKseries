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
        alignSelf: 'center'
    },

    input: {
        flex: 1,
        marginStart: 20,
        fontSize: 20,
        color: colors.gray
    },

    list: {
        marginHorizontal: 10,
        paddingBottom: 20
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
});

export default styles;