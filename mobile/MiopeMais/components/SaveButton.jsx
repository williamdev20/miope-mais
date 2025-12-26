import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

export default function SaveButton() {
    return (
        <View>
            <TouchableOpacity>
                <Text style={styles.saveButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
     saveButton: {
        backgroundColor: "lightgreen",
        padding: 10,
        width: 130,
        height: 50,
        textAlign: "center",
        borderRadius: 10,
        fontSize: 20
    }
})