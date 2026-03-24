import { View, Text, Image } from 'react-native'; 

import styles from './styles';
import Card from './card';


import img from '../../../assets/002-1-react-native.png';
import Hyoga from '../../../assets/Hyoga.png'; 
import Ikki from '../../../assets/Ikki.png';
import Saint from '../../../assets/SaintSeiya.png';
import Shiryu from '../../../assets/Shiryu.png';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade02</Text>
           
           <Card
                img={Hyoga}
                titulo={'Hyoga'} 
                descricao={'Boneco funko do Hyoga de Cisne em aramadura de ouro, personagem do anime Saint Seiya.'} 
                preco={'R$ 300,00'}
             />
          <Card
                img={Ikki}
                titulo={'Ikki'} 
                descricao={'Boneco funko do Ikki de Dragão em aramadura de ouro, personagem do anime Saint Seiya.'} 
                preco={'R$ 300,00'}
                
            /> 
           <Card
                img={Shiryu}
                titulo={'Shiryu'} 
                descricao={'Boneco funko do Shiryu de Dragão em aramadura de ouro, personagem do anime Saint Seiya.'} 
                preco={'R$ 300,00'}  
                />
            <Card
                img={Saint}
                titulo={'Saint Seiya'} 
                descricao={'Boneco funko do Saint Seiya em aramadura de ouro, personagem do anime Saint Seiya.'} 
                preco={'R$ 300,00'} 
            />
      </View>
    );
}

export default Atividade02;