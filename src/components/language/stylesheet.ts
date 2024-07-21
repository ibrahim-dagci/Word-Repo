import {
    Dimensions, 
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        height: Dimensions.get('window').width / 1.93,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        backgroundColor: 'gray',
        alignItems: 'center',
    },
    text: {
        position: 'absolute',
        color: '#dddddd',
        fontSize: 50,
    },
    image: {
        height: '100%',
        width: '100%',
    },
});
