import {
    StyleSheet,
    Platform, 
} from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems:"center",
        flexDirection:"row",
        transform: [{
            rotate: '180deg' 
        }],
    },
    input:{
        flex:1,
    }
});