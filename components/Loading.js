import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
      import LoaderKit from 'react-native-loader-kit'
const Loading = () => {
  return (
    <View style={{flex:1,
    justifyContent:'center',
    alignItems:'center'}}>
        <LoaderKit
        style={{ width: 150, height: 150,}}
        name={'BallClipRotateMultiple'} // Optional: see list of animations below
        color={'red'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
        />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})