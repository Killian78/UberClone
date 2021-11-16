import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        height: 70,
        width: 80,
        resizeMode: 'contain'
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    rightContainer: {
        width: 100,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    type:{
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    time:{
        color: "#5d5d5d"
    },
    price:{
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5
    },
});

export default styles;