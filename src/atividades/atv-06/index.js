import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade06() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const [Mensagem, setMensagem] = useState('');

    function calculaImc() {
        //Validação
        if (peso === null || altura <= 0) {
            setMensagem('Preencha os campos corretamente!');
            setImc(0.00);
            return;
        }
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);
        mensagemImc(tmpImc);
    }

    function mensagemImc(tmpImc) {

        //clasificações
  
            if (tmpImc < 18.5) {
                setMensagem('Abaixo do peso');
            } else if (tmpImc < 25) {
                setMensagem('Peso normal');
            } else if (tmpImc < 30) {
                setMensagem('Sobrepeso');
            } else {
                setMensagem('Obesidade');
            }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade06</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? Mensagem : imc.toFixed(2)}</Text>

            <Text style={[styles.imc, styles.txtMensagem]}>{Mensagem}</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    )
}