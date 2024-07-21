import {
    Dimensions, StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    signin: {
        paddingBottom: 50,
        paddingTop: 10,
    },
    signup: {
        height: Dimensions.get('window').height / 2.1,
        paddingBottom: 50,
        paddingTop: 10,
    },
    forgot: {
        paddingBottom: 50,
        paddingTop: 10,
    },
    mainButtonContainer: {
        justifyContent: 'space-between',
        flex: 1,
    },
});
