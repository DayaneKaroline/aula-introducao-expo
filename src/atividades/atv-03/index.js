import { useState } from "react";
import { View, Text, Button, Alert, TouchableOpacity } from "react-native";

import styles from "./styles";

function Atividade03() {

    const [numero, setNumero] = useState(0);

    function handleIncrementa() {
        setNumero(numero + 1);
    }

    function handleExibeBotao() {
        Alert.alert('+');
    }
    function handleDecrementa() {
        setNumero(numero - 1);
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
            <View style={styles.container}>
            <Text style={styles.titulo}>Atividade03</Text>
            <Text style={styles.texto}>Variáveis e State</Text>

            <TouchableOpacity style={styles.botao} onPress={handleDecrementa}>
                <Text style={styles.txtBotao}>-1</Text>
            </TouchableOpacity>
            <Text style={styles.valor}>{numero}</Text>
            <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>+</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botao} onPress={handleExibeBotao2}>

                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Atividade03;

