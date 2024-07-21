import {
    Platform, 
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: Platform.OS === 'android' ? 5 : 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 15,
        margin: 5,
        height: 48,
    },
    input: {
        fontWeight: 'bold',
        flex: 1,
    },
});
