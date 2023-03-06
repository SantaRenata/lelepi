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