import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const FlatListComp = ({ item }) => { // Accept 'item' as a prop
  return (
    <View style={styles.viewStyle}>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} /> {/* Fixed property access */}
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.price}</Text>
    </View>
  );
};

export default FlatListComp;

const styles = StyleSheet.create({
  viewStyle: {
    padding: 10,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    borderColor: 'red',
  },
});
