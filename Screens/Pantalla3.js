import React,{useContext} from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { QuotesContext } from "../Context/Context";

export default function Pantalla3(){
    const {Qs}=useContext(QuotesContext)
    return(
        <View style={styles.container}>
            <Text>Quotes</Text>
            <ScrollView>
            {Qs.map((p)=>
            <Text>{p.q}</Text>
            )}
            </ScrollView>
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