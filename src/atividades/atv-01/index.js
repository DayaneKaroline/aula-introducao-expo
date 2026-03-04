import {View, Text} from 'react-native';

import styles from './styles';

function Atividade01() {
return(
    <View style={styles.container} >
        <View> 
        <Text style={styles.titulo} >Atividade 01</Text>
        <Text style={styles.texto}>
            Aula de React Native com Expo
        </Text>
        <Text style={styles.texto2}>
            I don’t need your approval to be me. S2
        </Text>

        </View>
       
        <Text style={styles.texto3}>
             By: DayaneK
        </Text>
    </View>
);
}

export default Atividade01;

