import { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

export default function ColorPickerFontColorComponent({ close, getColorPickerFontColorProp }) {
    const [color, setColor] = useState("#fff");
    const [inputColor, setInputColor] = useState("#fff");

    const isValidColor = (hex) => /^#([0-9A-Fa-f]{6})$/.test(hex);

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
                color={color}
                onColorChangeComplete={(color) => {
                    getColorPickerFontColorProp(color);
                    setColor(color);
                    setInputColor(color);
                }}
            />

            <TextInput
                style={styles.input}
                placeholder="Font"
                placeholderTextColor={"#fff"}
                value={inputColor}
                onChangeText={(text) => {
                     if (text[0] != "#") {
                        text = "#" + text
                    }

                    setInputColor(text);
                    if (isValidColor(text)) {
                        setColor(text);
                        getColorPickerFontColorProp(text);
                    }

                }}
                keyboardType="default"
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
        zIndex: 2,
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
        bottom: "18%",
        position: "absolute"
    },

    input: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#fff",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 15,
        bottom: "40%",
        position: "absolute",
        color: "#fff"
    }
})