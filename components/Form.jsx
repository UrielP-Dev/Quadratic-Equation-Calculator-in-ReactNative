import { useState } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react'

const Form = ({setVariables}) => {

  const [varibaleA, setA] = useState('')
  const [varibaleB, setB] = useState('')
  const [varibaleC, setC] = useState('')

  setVariables(varibaleA, varibaleB, varibaleC)
  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dame A:</Text>
        <TextInput style={styles.input} placeholder='A'  keyboardType='numeric' onChangeText={(text) => setA(text)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dame B:</Text>
        <TextInput style={styles.input} placeholder='B'  keyboardType='numeric' onChangeText={(text) => setB(text)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dame C:</Text>
        <TextInput style={styles.input} placeholder='C'  keyboardType='numeric' onChangeText={(text) => setC(text)} />
      </View>
     
    </>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 4, 
    alignContent: 'center',
    justifyContent: 'center',
  },
  layout: {
    marginBottom: 30,
    marginTop: 30
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: 160,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    paddingLeft: 10 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 15
  },
  label: {
    marginRight: 10,
    fontSize: 16
  }
});
