import { View, Text, TextInput, StyleSheet, Switch } from 'react-native'
import React, { useState } from 'react'
import UseEffectComp from './components/UseEffectComp'

const App = () => {
  const[switchState,setSwitchState] = useState(true);
  return (
    <>
      <Switch value={switchState}
      onValueChange={value =>setSwitchState(value)}
      />
      {switchState && <UseEffectComp/>} 
    </>
  )
}

export default App;
