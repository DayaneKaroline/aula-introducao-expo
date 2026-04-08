import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Atividade04() {

    const [nome, setNome] = useState ('');
    const [sobrenome, setSobrenome] = useState(''); 
    const [nomeCompleto, setNomeCompleto] = useState(' ');   

    function handleExibeNome() {
        setNomeCompleto(`${nome} ${sobrenome}`);
        setNome('');
        setSobrenome('');
    }   
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>  

            <Text style={styles.txt}>{nomeCompleto}</Text>

            <TextInput
                onChangeText={setNome}
                value={nome}
                placeholder='Nome'
                maxLength={10}
                style={styles.input}
            />

          
            <TextInput
                onChangeText={setSobrenome}
                value={sobrenome}
                placeholder='Sobrenome'
                style={styles.input}
            />

            <TouchableOpacity 
            style={styles.botao} 
            onPress={() => handleExibeNome()}
            >

            <Text style={styles.txtBotao}> Exibir Nome Completo</Text>
            </TouchableOpacity>

     
        </View>
    );
}