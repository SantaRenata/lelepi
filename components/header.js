/*
* File: header.js
* Author: Sánta Renáta Diána
* Copyright: 2023, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-03-06
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { StyleSheet, Text, View } from "react-native";

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Feladat 0358</Text>
            <Text style={styles.text}>Paralelepipedon térfogat számító</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
    // flex: 1,
    width:"100%",
    backgroundColor: '#CD5C5C',
    alignItems: 'center',
    justifyContent: 'center',
    },
    text:{
        fontFamily:"Arial",
        fontSize:"18px",
    }
});