import { View, Text, Image } from 'react-native'; 

import styles from './styles';

function Card({titulo, descricao, preco, img}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <View style={styles.container}>
            <Image source={img} style={styles.imagem} />
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.preco}>{preco}</Text>
            </View>
        
        </View>
    );
}

export default Card;