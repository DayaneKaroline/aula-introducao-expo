import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';
import Exemplo02 from './src/exemplos/ex-02';
import Exemplo03 from './src/exemplos/ex-03';
import Exemplo04 from './src/exemplos/ex-04';
import Exemplo05 from './src/exemplos/ex05';
import Exemplo06 from './src/exemplos/ex06';
import Exemplo07 from './src/exemplos/ex07';


import Atividade01 from './src/atividades/atv-01';
import Atividade02 from './src/atividades/atv-02';
import Atividade03 from './src/atividades/atv-03';
import Atividade04 from './src/atividades/atv-04';
import Atividade05 from './src/atividades/atv-05';
import Atividade06 from './src/atividades/atv-06';



export default function App() {
  return (
    <View style={styles.container}>
      <Atividade06 />
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(202, 27, 237)',
    padding: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
