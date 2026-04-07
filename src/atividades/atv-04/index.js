import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Atividade04() {

    const [txt1, setTexto] = useState (' ');
    const [txt2, setTxt2] = useState(' '); 
    const [mensagem, setMensagem] = useState(' ');   

    function handleExibeMensagem() {
        setMensagem(txt2);
        setTxt2('');
    }   
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>  

            <Text style={styles.txt}>{txt1}</Text>

            <TextInput
                onChangeText={setTexto}
                placeholder='Nome'
                keyboardType='ascii-capable'
                maxLength={7}
                style={styles.input}
            />

            <Text style={styles.txt}>{mensagem}</Text>
            <TextInput
                value={txt2}
                onChangeText={setTxt2}
                placeholder='Sobrenome'
                keyboardType='ascii-capable'
                style={styles.input}
            />

            <TouchableOpacity 
            style={styles.botao} 
            onPress={() => handleExibeMensagem()}
            >

                <Text style={styles.txtBotao}>Nome Completo</Text>
            </TouchableOpacity>

     
        </View>
    );
}