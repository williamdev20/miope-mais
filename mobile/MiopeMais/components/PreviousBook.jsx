import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";

export default function PreviousBook() {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Book")}>
                <Image style={styles.undoIcon} source={require("../assets/preference/undo.png")} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    undoIcon: {
        left: 0,
        backgroundColor: "#fff",
        width: 35,
        height: 35,
        borderRadius: 100,
    }
})