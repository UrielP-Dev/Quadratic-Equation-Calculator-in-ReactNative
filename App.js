import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';
import Answers from './components/Answers'; 

export default function App() {
  const [varibaleA, setA] = useState('');
  const [varibaleB, setB] = useState('');
  const [varibaleC, setC] = useState('');

  function setVariables(a, b, c){
    setA(a);
    setB(b);
    setC(c);
  }

  return (
    <>
      <View style={styles.container}> 
        <Text>Solución a una ecuación cuadrática</Text> 
        <Form setVariables={setVariables} />
      </View>

      {/* Pasamos las variables a Answers como props */}
      <Answers varibaleA={varibaleA} varibaleB={varibaleB} varibaleC={varibaleC} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 4,
    padding: 20
  },
  layout: {
    marginBottom: 30,
    marginTop: 30
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: 140,
    marginBottom: 10,
    marginTop: 10
  },
  pic: {
    flex: 1,
    height: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0
  }
});
