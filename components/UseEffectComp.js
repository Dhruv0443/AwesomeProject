import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
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
        <ScrollView style={{width:'100%',height:"100%"}}>  
            {products.length===0 ? <Loading /> : 
                   products.map(item=>{
                    return (
                    <View style={styles.viewStyle}>
                        <Image source={{uri:item.images[0]}} style={{width:100,height:100}}/>
                        <Text style={{fontWeight:'900', paddingBottom:10}}>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>Price: ${item.price}</Text>
                    </View>
                    );
                })         
            }
        </ScrollView>

  )
}
export default UseEffectComp;

const styles=StyleSheet.create({
    viewStyle:{
        padding:10,
        borderWidth:1,
        margin:10,
        borderRadius:10,
      }
});