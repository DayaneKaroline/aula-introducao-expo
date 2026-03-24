import { StyleSheet } from 'react-native';  

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: RFPercentage(0.2), 
        borderColor: '#cd41f8', 
        padding: RFPercentage(1.5), 
        borderRadius: RFPercentage(1.5), 
        width: '90%', 
        alignItems: 'center', 
        marginBottom: RFPercentage(0.5), 
    }, 
    titulo: {
        fontSize: RFPercentage(2), 
        fontWeight: 'bold', 
        color: 'darkslategrey', 
        textAlign: 'center',
    }, 
    descricao: {
        fontSize: RFPercentage(1.5), 
        color: '#555', 
        textAlign: 'center',
    },
    preco: {
        fontSize: RFPercentage(1.5), 
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    imagem: {
        height: RFPercentage(16), 
        width: RFPercentage(48),  
        width: '25%', 
        resizeMode: 'contain', 
        // filter: 'grayscale(80%)', 
        // filter: 'sepia(80%)', 
        // filter: 'saturate(10%)', 
        //filter: 'brightness(30%)', 
        // filter: 'contrast(50%)', 
        // filter: 'invert(100%)', 
    },  
    textContainer: {
        flex: 1, 
        marginLeft: RFPercentage(2), 
    },
});

export default styles;