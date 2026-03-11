import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles=StyleSheet.create({
    container: {
        backgroundColor:'rgb(78, 186, 194)',
        // margin: 20,
        padding: RFPercentage(2),
        flex: 1,
        borderRadius: RFPercentage(2),
        justifyContent: 'space-between',
    },
    titulo: {
        fontFamily:'fraktur',
        fontSize: RFPercentage(3),
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: RFPercentage(5),
    },
    texto: {
        fontSize: RFPercentage(2),
        textAlign:'justify',
        width: '100%',
        marginLeft: RFPercentage(2),
        fontStyle: 'arial',
    },
      texto2:{
        fontSize: RFPercentage(2),
        textAlign:'right',
        width: '100%',
        marginTop: RFPercentage(2),
        fontStyle: 'italic',

    },
    texto3:{
        fontSize: RFPercentage(2),
        textAlign:'right',
        fontFamily: 'lucida handwriting',
    },
});

export default styles; 
