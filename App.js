import { useState } from 'react';
import { StyleSheet, Text, View,  TouchableOpacity  } from 'react-native';
import Form from './components/Form';
import Answers from './components/Answers'; 

export default function App() {
  const [varibaleA, setA] = useState('');
  const [varibaleB, setB] = useState('');
  const [varibaleC, setC] = useState('');
  const [borderColor, setBorderColor] = useState('white'); 
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');

  function Resolve(){
    const a = parseFloat(varibaleA);
    const b = parseFloat(varibaleB);
    const c = parseFloat(varibaleC);

    const discriminant = b * b - 4 * a * c;

    if (discriminant >= 0) {
      const sqrtD = Math.sqrt(discriminant);
      const x1 = (-b + sqrtD) / (2 * a);
      const x2 = (-b - sqrtD) / (2 * a);

      setX1(x1.toFixed(2));
      setX2(x2.toFixed(2));
    } else {
      setX1('No real');
      setX2('No real');
    }
    setBorderColor('#5ce65c');

    setTimeout(() => {
      setBorderColor('white');
    }, 5000);
  }


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
      <View style={styles.container}>
        <Answers varibaleA={varibaleA} varibaleB={varibaleB} varibaleC={varibaleC} x1={x1} x2={x2} borderColor={borderColor} /> 
      </View>
      <View  style={styles.buttonContainer}>
      <TouchableOpacity onPress={Resolve} style={styles.resolveStyles} >
        <Text>
          Resolve
        </Text>
      </TouchableOpacity>
      </View>
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
  resolveStyles: {
    flex: 0,
    borderRadius: 50,
    borderWidth: 2,
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5ce65c'

  },
  buttonContainer: {
    flex: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 20,    
    marginBottom: 20,
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
