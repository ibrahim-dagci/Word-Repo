import {
    StyleSheet,
    Platform, 
} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: Platform.OS === 'android' ? 12 : 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        margin: 5,
        gap: 5,
    },
    left: {
        fontWeight: 'bold',
        flexWrap: 'wrap',
        color: '#dadada',
        fontSize: 18,
    },
    right: {
        fontWeight: 'bold',
        color: '#dadada',
        fontSize: 18,
        flexWrap: 'wrap',
        flex: 1,
    },
});
