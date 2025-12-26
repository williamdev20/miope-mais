import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import ColorPicker from "react-native-wheel-color-picker";
import SaveButton from "../../../components/SaveButton";
import { useState } from "react";

export default function PaletteScreen() {

    const [colorModal, setColorModal] = useState(false);

    const colorModalFunc = () => {
        setColorModal(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.textHeader}>Mudar cores</Text>
            </View>

            <View style={styles.changeColorsContainer}>
                <View style={styles.backgroundContainer}>
                    <View style={styles.headerBackgroundContainer}>
                        <Image style={styles.paletteIcon} source={require("../../../assets/preference/pallete.png")} />
                        <Text style={styles.genericText}>Fundo</Text>
                    </View>

                    <View style={styles.changeBackgroundColorContainer}>
                        <View style={styles.previewColor} />

                        <View style={styles.colorContainer1}>
                            <View style={styles.color1} />
                            <View style={styles.color2} />
                        </View>

                        <View style={styles.colorContainer2}>
                            <View style={styles.color3} />
                            <View style={styles.color4} /> 
                        </View>

                        <TouchableOpacity onPress={colorModalFunc}>
                            <Image style={styles.editIcon} source={require("../../../assets/preference/edit.png")} />
                        </TouchableOpacity>

                       

                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.headerTextContainer}>
                        <Image style={styles.paletteIcon}  source={require("../../../assets/preference/pallete.png")} />
                        <Text style={styles.genericText}>Texto</Text>
                    </View>

                    <View style={styles.changeTextColorContainer}>
                        <View style={styles.previewColor} />

                        <View style={styles.color1} />
                        <View style={styles.color2} />

                        <TouchableOpacity onPress={colorModalFunc}>
                            <Image style={styles.editIcon} source={require("../../../assets/preference/edit.png")} />
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <SaveButton />
            </View>

             {colorModal && (
                <View style={styles.colorPickerContainer}>
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
            )}
        </View>
    )
}