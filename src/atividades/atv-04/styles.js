import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#f282f0',
            alignItems: 'center',
        },
        titulo: {
            fontSize: RFPercentage(5),
            fontWeight: 'bold', 
            color: '#040106',
            margin: RFPercentage(5),
        },
        txt: {  
            fontSize: RFPercentage(2.5),
        },
        input: {
            borderWidth: RFPercentage(0.5),
            borderColor: '#b2f9f9',
            width: '80%',
            borderRadius: RFPercentage(0.5),
            padding: RFPercentage(1.5),
            fontSize: RFPercentage(2),
            textAlign: 'center',
        },
        botao: {
            backgroundColor: '#48dff7',
            width: '75%',
            borderRadius: RFPercentage(2),
            padding: RFPercentage(1),
            alignItems: 'center',
            justifyContent: 'center',
            margin: RFPercentage(2),
        },
        txtBotao: {
            fontSize: RFPercentage(2),
            color: '#240221',
        },

    }
);

export default styles;