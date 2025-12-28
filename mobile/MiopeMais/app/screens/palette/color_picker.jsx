import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

export default function ColorPickerComponent({ close }) {
    return (
        <View style={styles.colorPickerContainer}>
            <TouchableOpacity onPress={close}  style={styles.headerContainer}>
                <Image style={styles.closeIcon} source={require("../../../assets/home/close.png")} />
            </TouchableOpacity>

            <ColorPicker
                style={styles.colorPicker}
                thumbSize={40}
                sliderSize={40}
                noSnap={true}
                row={false}
                useNativeDriver={false}
                useNativeLayout={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    colorPickerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1,
        backgroundColor: "#131416ff"
    },

    headerContainer: { 
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: "80%",
        padding: 55,
        top: 0,
        position: "absolute",
        zIndex: 1000
    },

    closeIcon: {
        right: 0,
        position: "absolute",
        backgroundColor: "#fff",
        width: 40,
        height: 40,
        borderRadius: 100,
        margin: 15
    },

    colorPicker: {
        width: "100%",
        height: "100%",
        padding: "7%",
        marginBottom: "45%"
    }
})