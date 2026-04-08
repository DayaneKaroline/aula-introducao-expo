import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#d77deb',
        padding: RFValue(8),
        with: '100%',
        borderRadius: RFValue(20),
    },
    titulo: {
        margin: RFValue(6),
        fontSize: RFValue(28),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#111011',
},
    txtSaida: {
        margin: RFValue(6),
        fontSize: RFValue(20),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#383638',
    },
    txtEntrada: {
        borderWidth: RFValue(2),
        textAlign: 'center',
        fontSize: RFValue(20),
        borderColor: '#73cee0',
        color: '#450743',
        borderRadius: RFValue(10),
        padding: RFValue(10)
        
    },
    Button: {
        backgroundColor: '#73cee0',
        height: RFValue(56),
        justifyContent: 'center',
        borderRadius: RFValue(10),
        marginTop: RFValue(20),
        width: '100%',
    },
    buttonTouch: {
        backgroundColor: '#e99cf2',
    },
    textButton: {
        fontSize: RFValue(28),
        color: '#fafafa',
        textAlign: 'center',
    },
    textLabel: {
        fontSize: RFValue(20),
        color: '#450743',
        textAlign: 'center',
    },
    txtTotal: {
        color: '#450743',
        fontWeight: 'bold',
    },
});

export default styles;