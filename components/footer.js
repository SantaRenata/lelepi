import { StyleSheet, Text, View } from "react-native";

export default function Footer(){
    return(
        <View style={styles.container}>
            <Text>Névjegy:</Text>
            <Text>Sánta Renáta Diána, Szoft II N, 2023-03-06</Text>
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
});