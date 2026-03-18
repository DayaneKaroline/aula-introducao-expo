import { StyleSheet } from 'react-native'; 

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(171, 241, 241)',
        alignItems: 'center',
        // justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2,
        width: '100%',
        height: '100%',
        borderRadius: RFPercentage(1.5),
    }, 
    titulo: {
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        color: 'darkslategrey',
        marginBottom: 16,
        borderRadius: RFPercentage(1.5),
        borderColor: 'black',

    }, 
    imagem: {
        height: RFPercentage(16), 
        // width: RFPercentage(48),  
        width: '25%', 
        resizeMode: 'contain', 
        // filter: 'grayscale(80%)', 
        // filter: 'sepia(80%)', 
        // filter: 'saturate(10%)', 
        filter: 'brightness(30%)', 
        // filter: 'contrast(50%)', 
        // filter: 'invert(100%)', 
    }, 
    texto: {
        fontSize: RFPercentage(2.5),
        color: 'white',
        textAlign: 'center',
        marginTop: 16,
    },
});

export default styles;