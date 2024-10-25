import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Form from './components/Form';
import Answers from './components/Answers'; 

export default function App() {
  const [varibaleA, setA] = useState('');
  const [varibaleB, setB] = useState('');
  const [varibaleC, setC] = useState('');
  const [borderColor, setBorderColor] = useState('white'); 
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');
  const [error, setError] = useState('');

  function Resolve() {
    if (varibaleA === '' || varibaleB === '' || varibaleC === '') {
      setError("Por favor, ingresa valores en los campos A, B y C.");
      setX1('');
      setX2('');
      return;
    }

    const a = parseFloat(varibaleA);
    const b = parseFloat(varibaleB);
    const c = parseFloat(varibaleC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setError("Por favor, ingresa valores numéricos válidos para A, B y C.");
      setX1('');
      setX2('');
      return;
    }

    if (a === 0) {
      setError("El valor de A no puede ser cero en una ecuación cuadrática.");
      setX1('');
      setX2('');
      return;
    }


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

    setError('');
    setBorderColor('#5ce65c');

    setTimeout(() => {
      setBorderColor('white');
    }, 5000);
  }

  function setVariables(a, b, c) {
    setA(a);
    setB(b);
    setC(c);
  }

  return (
    <>
      <View style={styles.container}> 
        <Text style={styles.title}>Solución a una ecuación cuadrática</Text> 
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <Form setVariables={setVariables} />
      </View>
      <View style={styles.container}>
        <Answers varibaleA={varibaleA} varibaleB={varibaleB} varibaleC={varibaleC} x1={x1} x2={x2} borderColor={borderColor} /> 
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={Resolve} style={styles.resolveStyles}>
          <Text style={styles.buttonText}>Resolve</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#dcdde1',
    padding: 25,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resolveStyles: {
    borderRadius: 25,
    height: 50,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6c5ce7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  errorText: {
    color: '#e74c3c',
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 20,
    textAlign: 'center',
  }
});
