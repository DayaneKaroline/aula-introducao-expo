import { StyleSheet } from "react-native";    

import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#932be9',
        borderRadius: 10,
        padding: 8,
        alignItems: 'center',
    },
    titulo: {
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        borderWidth: 3,
        color: '#e64ffd'
    },
    texto: {
        fontSize: RFPercentage(2.2),
    },
    botaoAlert: {
        width: '75%',
        margin: RFPercentage(2),
    },
    valor: {
        color: '#eb71f8',
        fontSize: RFPercentage(3),
    },
    botao: {
        backgroundColor: '#88c9ea',
        width: '75%',
        borderRadius: RFPercentage(2),
        padding: RFPercentage(1),
        alignItems: 'center',
        justifyContent: 'center',
        margin: RFPercentage(2),
    },
});

export default styles;