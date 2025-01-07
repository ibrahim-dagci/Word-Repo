import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    container: {
        marginVertical: 10,
        transform: [{
            rotate: '180deg' 
        }],
    },
    textContainer: {
        backgroundColor: '#f0f0f0',
        flexWrap: 'wrap',
        borderRadius: 15,
        maxWidth: '80%',
        paddingBottom:10,
        paddingRight:25,
        paddingLeft:25,
        paddingTop:10,
    },
    text: {
        flexWrap: 'wrap',
        maxWidth: '100%',
        lineHeight: 24,
        fontSize: 16
    },
    statusView:{
        position:"absolute",
        fontSize:10,
        bottom:7,
        right:7
    }
});