import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const Form = ({setVariables}) => {
  const [varibaleA, setA] = useState('');
  const [varibaleB, setB] = useState('');
  const [varibaleC, setC] = useState('');

  setVariables(varibaleA, varibaleB, varibaleC);

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dame A:</Text>
        <TextInput 
          style={styles.input} 
          placeholder='A' 
          keyboardType='numeric'
          onChangeText={(text) => setA(text)}
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dame B:</Text>
        <TextInput 
          style={styles.input} 
          placeholder='B' 
          keyboardType='numeric'
          onChangeText={(text) => setB(text)}
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dame C:</Text>
        <TextInput 
          style={styles.input} 
          placeholder='C' 
          keyboardType='numeric'
          onChangeText={(text) => setC(text)}
          returnKeyType="done"
        />
      </View>
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
    width: '30%',
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#dcdde1',
    borderWidth: 1,
    height: 50,
    width: '65%',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#2d3436',
  },
});