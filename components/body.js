import React from "react";
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";

export default function Body(){
    const [a_edge, setA_Edge] = React.useState('');
    const [b_edge, setB_Edge] = React.useState('');
    const [c_edge, setC_Edge] = React.useState('');
    const [volume, setVolume] = React.useState('');

    function onCalcButton(){
        let volume = a_edge*b_edge*c_edge;
        setVolume(volume);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.edge}>a él:</Text>
            <TextInput style={styles.input} onChangeText={(res) => {setA_Edge(res)}}/>
            
            <Text style={styles.edge}>b él:</Text>
            <TextInput style={styles.input} onChangeText={(res) => {setB_Edge(res)}}/>
            
            <Text style={styles.edge}>c él:</Text>
            <TextInput style={styles.input} onChangeText={(res) => {setC_Edge(res)}}/>
            
            <TouchableHighlight style={styles.button} onPress={onCalcButton}><Text>Számít</Text></TouchableHighlight>

            <Text style={styles.result}>Térfogat:</Text>
            <TextInput style={styles.input} editable = {false} value={volume} onChangeText={(res) => {setVolume(res)}}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    width:"100%",
    backgroundColor: '#FFA07A',
    alignItems: 'center',
    justifyContent: 'center'
    },

    input:{
        backgroundColor:"white",
        borderRadius:"5px",
        width:"50%",
        height:"3%",
        marginBottom:"10px",
    },

    result:{
        marginTop:"30px",
        width:"50%",
        fontFamily:"Arial"
    },

    edge:{
        width:"50%",
        fontFamily:"Arial"
    },

    button:{
        backgroundColor:"#FBECD7",
        marginTop:"6px",
        padding:"3px",
        width:"20%",
        borderRadius:"8px",
        alignItems:"center",
    }
});