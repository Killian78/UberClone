import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
    },    
    textInput: {
        padding: 10,
        height: 50,
        backgroundColor:'#eee',
        marginVertical: 5,
        marginLeft: 25
    },
    listView: {
        position: "absolute",
        top: 120,
    },
    autocompleteContainer:{
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10
    },
    separator: {
        height: 1,
        backgroundColor: '#dddd',
    },
    row: {
        height: 30,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
    },
    iconContainer:{
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 20,
        marginLeft: 10
    },
    locationText:{

    },
    circle:{
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 25,
        left: 15,
        borderRadius: 5
    },
    line:{
        width: 1,
        height: 45,
        backgroundColor: '#d2d2d2',
        position: 'absolute',
        top: 33,
        left: 17
    },
    square:{
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 80,
        left: 15
    }
});

export default styles;