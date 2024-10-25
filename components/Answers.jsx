import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const Answers = ({ varibaleA, varibaleB, varibaleC, x1, x2, borderColor }) => {
  return (
    <View style={styles.container}>
      <Text>Solución a una ecuación cuadrática</Text>   
      <Text> A: {varibaleA} </Text> 
      <Text> B: {varibaleB} </Text>       
      <Text> C: {varibaleC} </Text> 
      <View style={[styles.Answer, { borderColor: borderColor }]}>
        <Text> X1: {x1} </Text> 
        <Text> X2: {x2} </Text> 
      </View>
      

      
      </View>
  );
}

export default Answers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#dcdde1',
    padding: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Answer: {
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 15,
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 15,
    textAlign: 'center',
  },
  variableText: {
    fontSize: 16,
    color: '#2d3436',
    marginBottom: 10,
    fontWeight: '500',
  },
  resultText: {
    fontSize: 18,
    color: '#6c5ce7',
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  }
});