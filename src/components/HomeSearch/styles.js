import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        //padding: 20,
        //backgroundColor: "grey"
    },
    inputBox: {
        //fontSize: ,
        backgroundColor: "#e7e7e7",
        margin: 10,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    inputText: {
        fontWeight: "600",
        fontSize: 20,
        color: "#434343"
    },
    timeContainer: {
        flexDirection: "row",
        width: 100,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 50
    },
    row: {
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#dbdbdb"
    },
    iconContainer: {
        backgroundColor: "#b3b3b3",
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {
        marginLeft: 15,
        fontWeight: "600",
        fontSize: 16
    }
});

export default styles;