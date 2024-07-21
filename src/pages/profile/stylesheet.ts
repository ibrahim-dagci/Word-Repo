import {
    Platform, StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        gap: Platform.OS === 'android' ? 40 : 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 70,
        padding: 24,
        flex: 1,
    },
    informationContainer: {
        width: '100%',
    },
    buttonContainer: {
        justifyContent: 'space-between',
        width: '100%',
        flex: 1,
    },
});
