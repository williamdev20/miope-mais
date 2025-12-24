import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Previous({ closePreferenceMenuByPreviousFunc }) {
    return (
        <View>
            <TouchableOpacity onPress={closePreferenceMenuByPreviousFunc}>
                <Image style={styles.undoIcon} source={require("../assets/preference/undo.png")} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    undoIcon: {
        width: 35,
        height: 35,
        backgroundColor: "#fff",
        borderRadius: 100
    }
})