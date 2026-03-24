import { StyleSheet } from 'react-native'; 

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1, //contair oculpa 100% da tela
        backgroundColor: '#fafafa',
        alignItems: 'center',
        borderRadius: 10, //borda curvada
        padding: 8, //espaçamento interno
    }, 
    titulo: {
        fontSize: RFPercentage(4),// tamanho da fonte responsivo
        fontWeight: 'bold',
        borderWidth: 3, //espessura da borda
        marginTop:20,
        color: 'darkslategrey',
        marginBottom: 20,
        paddingVertical: 10, //espaçamento vertical
        paddingHorizontal: 20, //espaçamento horizontal
        borderRadius: RFPercentage(1.5),
        borderColor: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',

    } 
});

export default styles;