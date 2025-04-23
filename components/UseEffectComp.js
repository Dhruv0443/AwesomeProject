import { Alert, Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import FlatListComp from './FlatListComp';
import FooterComp from './FooterComp';
import Header from './Header';
import ItemSeperator from './ItemSeperator';
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
    <View style={{width:'100%',height:"100%"}}>
    {products.length===0 ?(
      <Loading/>
    ):(
      <FlatList
      keyExtractor={item => item.id}
      initialNumToRender={3}
      ListFooterComponent={FooterComp}
      ListHeaderComponent={Header}
      ItemSeparatorComponent={ItemSeperator}
       data={products}
       renderItem={({item})=><FlatListComp item={item}/>}
    />
  )}
  </View>
  );
  };
export default UseEffectComp;