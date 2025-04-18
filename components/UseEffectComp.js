import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
const UseEffectComp = () => {
    useEffect(()=>{
      console.log('Hello form effect');
    // const clearId =setInterval(()=>{
    //   console.log('Advertisement');
    // },5000)
    // return ()=>{
    //   console.log('component unmounted');
    //   clearInterval(clearId);
    // }
    },[count]);
    console.log('hello');
  return (
    <View>
      <Text>{count}</Text>
      <Button title='Increase' onPress={()=>setCount(count+1)}/>
    </View>
  )
}
export default UseEffectComp;
const styles = StyleSheet.create({})