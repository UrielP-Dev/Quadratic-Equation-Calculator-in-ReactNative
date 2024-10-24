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
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 4,
    padding: 20,
    marginTop: 20,
    
  },
  Answer:{
    marginTop: 10,
    borderWidth: 2,
    fontStyle: 'bold',
    borderColor: 'white',
    borderRadius:50,
    width: 100,
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: 140,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10
  }
});
