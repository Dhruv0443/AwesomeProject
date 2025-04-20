import { View, Text, TextInput, StyleSheet, Switch } from 'react-native'
import React, { useState } from 'react'
import UseEffectComp from './components/UseEffectComp'
import Loading from './components/Loading';
const App = () => {
  const[switchState,setSwitchState] = useState(true);
  return (
    <View style={{width:'100%', height:'100%'}}>
      <Loading/>
    </View>
  )
}

export default App;
