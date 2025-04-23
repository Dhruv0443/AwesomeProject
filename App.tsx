import { View, Text, TextInput, StyleSheet, Switch } from 'react-native'
import React, { useState } from 'react'
import UseEffectComp from './components/UseEffectComp'
import Loading from './components/Loading';
const App = () => {
  const[switchState,setSwitchState] = useState(true);
  <Switch
  
  />
  return (
    <View style={{width:'100%', height:'100%'}}>
      <UseEffectComp/>
    </View>
  )
}

export default App;
