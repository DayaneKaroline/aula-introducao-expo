import { useState } from "react";   
import { View, Text, Button, Alert, TouchableOpacity } from "react-native";

import styles from "./styles";

function Atividade03() {
    const [numero, setNumero] = useState(0);
    
    function handleIncrementa() {
        setNumero(numero + 1);
    }

    function handleExibeBotao() {
        Alert.alert(' +');
    }

    const handleExibeBotao2 = () => {
        Alert.alert(
            'Alerta',       
            [
                {
                    text: '+',
                    onPress: () => Alert.alert('Mensagem', 'Clicou em +'),
                    style: 'default',
                },
                {
                    text: '-',
                    onPress: () => Alert.alert('Clicou em -'),
                    style: 'default',
                },
                {
                    text: 'Zerar',
                    onPress: () => Alert.alert('Clicou em Zerar'),
                    style: 'default',
                },
            ]
        );
    }
           
   return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade03</Text>
            <Text style={styles.texto}>Variáveis e State</Text>

        <View style={styles.botaoAlert}>
            <Button
                title='Não clique'
                color={'darkslategrey'}
                onPress={handleExibeBotao2}
            />
        </View>  
            <Text style={styles.valor}>{numero}</Text>
            <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>+1</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Atividade03;
    
       