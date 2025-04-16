import React from "react";
import { View,Text, StyleSheet, StatusBar, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from "react-native";
function App(){
  const alertFunc =()=>{
    console.log("Button Preseed");
  };
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:20}}>
      <TouchableHighlight underlayColor={'blue'} 
      onPress={alertFunc}>
        {/* gives a underlay color when button is pressed */}
        <View style={styles.btnColor}>
          <Text>Press Me</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity>
        {/* gives opacity to it when clicked --- initally white color*/}
        <View style={styles.btnColor}>
          <Text>Press Me</Text>
        </View>
      </TouchableOpacity>
      <TouchableNativeFeedback> 
        {/* gives rippling feedback */}
        <View style={styles.btnColor}>
          <Text>Press Me</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableWithoutFeedback>
        {/* for giving the simple button with no effect */}
        <View style={styles.btnColor}>
          <Text>Press Me</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  btnColor:{
    backgroundColor:'red',
    width:200,
    height:50,
    justifyContent:'center',
    alignItems:'center',
  },
  appheight:{
    marginTop: StatusBar.currentHeight,
  }
});