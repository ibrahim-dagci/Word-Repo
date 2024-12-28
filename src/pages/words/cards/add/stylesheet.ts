import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        paddingTop: 45,
        flex: 1,
    },
    soundsContainer:{
        position: 'absolute', 
        flexDirection:"row",
        left: 15, 
        top: 15,
    },
    soundButtonContent:{
        padding:7,
    },
    soundButtonContentText:{
        position:"absolute",
        fontSize:10,
        left:0,
        top:0,
    },
    inputContainer: {
        padding: 15,
        gap: 20,
    },
});
