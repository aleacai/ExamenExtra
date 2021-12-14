import React,{useContext} from "react";
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { QuotesContext } from "../Context/Context";

export default function Pantalla2(){
    const {QRandom}=useContext(QuotesContext)
    return(
        <View style={styles.container}>
            <Text>Quote Random</Text>
            {QRandom.map((p)=>
            <Text>{p.q}</Text>
            )}
            <StatusBar style="auto"/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });