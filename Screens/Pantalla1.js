import React,{useContext} from "react";
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { QuotesContext } from "../Context/Context";

export default function Pantalla1(){
    const {QToday}=useContext(QuotesContext)
    return(
        <View style={styles.container}>
            <Text>Quote Today</Text>
            {QToday.map((p)=>
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