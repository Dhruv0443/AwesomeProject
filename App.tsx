import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <TextInput 
        style={styles.TextInput} 
        onChangeText={text=>console.log(text)}
        placeholder="Enter your name"
        autoCapitalize='sentences'
        defaultValue='dhruv' //can be change
        value='dev' // this will not change 
        maxLength={10}// to give size to input
        multiline={true} // to give multiple lines
        numberOfLines={4} // to give number of line when multiple lines are called ...it cant work alone
        keyboardType='numeric' // to give the different type of keyboard u want
      />
    </View>
  )
}

export default App;
const styles = StyleSheet.create({
  TextInput:{
    margin:50,
    borderWidth:1,
    borderColor:'red',
    borderRadius:10,
    paddingHorizontal:10,
  },
});