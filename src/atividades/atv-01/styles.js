import { StyleSheet } from 'react-native';

const styles=StyleSheet.create({
    container: {
        backgroundColor:'rgb(78, 186, 194)',
        // margin: 20,
        padding: 20,
        flex: 1,
        borderRadius: 20,
        justifyContent: 'space-between',
    },
    titulo: {
        fontFamily:'fraktur',
        fontSize: 40,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 50,
    },
    texto: {
        fontSize: 20,
        textAlign:'justify',
        width: '100%',
        marginLeft: 10,
        fontStyle: 'arial',
    },
      texto2:{
        fontSize: 14,
        textAlign:'right',
        width: '100%',
        marginTop: 30,
        fontStyle: 'italic',

    },
    texto3:{
        fontSize: 14,
        textAlign:'right',
    },
});

export default styles; 
