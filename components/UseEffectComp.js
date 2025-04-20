import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
const UseEffectComp = () => {
  const [products, setProducts] =useState([]);
    useEffect(()=>{
      async function callingApi(){
        const fetchData = await fetch('https://dummyjson.com/products');
        const data = await fetchData.json();
        setProducts(data.products);
        console.log(data);
      }
      callingApi();
    },[]);

  return (
    <View style={{width:'100%', height:'100%'}}>
    {products.length===0 ? <Loading/>: <Text>Hello</Text>}
    </View>
  )
}
export default UseEffectComp;
const styles = StyleSheet.create({})