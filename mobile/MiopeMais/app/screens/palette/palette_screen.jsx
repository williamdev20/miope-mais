import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useState, useEffect } from "react";
import { Checkbox } from 'expo-checkbox';
import PreviousBook from "../../../components/PreviousBook";
import ColorPickerComponent from "./color_picker";
import SaveButton from "../../../components/SaveButton";

export default function PaletteScreen() {
    const [colorModal, setColorModal] = useState(false);
    const [isCheckedBackgroundColor1, setCheckedBackgroundColor1] = useState(true);
    const [isCheckedBackgroundColor2, setCheckedBackgroundColor2] = useState(false);
    const [isCheckedBackgroundColor3, setCheckedBackgroundColor3] = useState(false);
    const [isCheckedBackgroundColor4, setCheckedBackgroundColor4] = useState(false);

    const [isCheckedTextColor1, setCheckedTextColor1] = useState(false);
    const [isCheckedTextColor2, setCheckedTextColor2] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState("#f5f5f5");
    const [textColor, setTextColor] = useState("#1e1e1e");

    const colorModalFunc = () => {
        setColorModal(true);
    }

    const handleBackgroundColorSelect = (colorNumber) => {

        setCheckedBackgroundColor1(colorNumber === 1);
        setCheckedBackgroundColor2(colorNumber === 2);
        setCheckedBackgroundColor3(colorNumber === 3);
        setCheckedBackgroundColor4(colorNumber === 4);
        
        const colors = ["#f5f5f5", "#1e1e1e", "#000b3e", "#FFFFE0"];
        setBackgroundColor(colors[colorNumber-1]);
    }

    const handleTextColor = (colorNumber) => {
        setCheckedTextColor1(colorNumber === 1);
        setCheckedTextColor2(colorNumber === 2);

        const colors = ["#f5f5f5", "#1e1e1e"];
        setTextColor(colors[colorNumber-1]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.previousBookHeader}>
                    <PreviousBook />
                </View>
                <Text style={styles.textHeader} adjustsFontSizeToFit>Mudar cores</Text>
            </View>

            <View style={styles.changeColorsContainer}>
                <View style={styles.backgroundContainer}>
                    <View style={styles.headerBackgroundContainer}>
                        <Image style={styles.paletteIcon} source={require("../../../assets/preference/pallete.png")} />
                        <Text style={styles.genericText}>Fundo</Text>
                    </View>

                    <View style={styles.changeBackgroundColorContainer}>
                        <View style={[styles.previewColor, {backgroundColor: backgroundColor}]} />

                        <View style={styles.colorContainer1}>
                            <Checkbox
                                style={styles.backgroundColor1}
                                value={isCheckedBackgroundColor1}
                                onValueChange={() => handleBackgroundColorSelect(1)}
                                color={isCheckedBackgroundColor1 ? '#4630EB' : undefined}
                            />
                            <Checkbox
                                style={styles.backgroundColor2}
                                value={isCheckedBackgroundColor2}
                                onValueChange={() => handleBackgroundColorSelect(2)}
                                color={isCheckedBackgroundColor2 ? '#4630EB' : undefined}
                            />
                        </View>

                        <View style={styles.colorContainer2}>
                            <Checkbox
                                style={styles.backgroundColor3}
                                value={isCheckedBackgroundColor3}
                                onValueChange={() => handleBackgroundColorSelect(3)}
                                color={isCheckedBackgroundColor3 ? '#4630EB' : undefined}
                            />
                            <Checkbox
                                style={styles.backgroundColor4}
                                value={isCheckedBackgroundColor4}
                                onValueChange={() => handleBackgroundColorSelect(4)}
                                color={isCheckedBackgroundColor4 ? '#4630EB' : undefined}
                            /> 
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
                        <View style={[styles.previewColor, {backgroundColor: textColor}]} />

                        <Checkbox
                            style={styles.textColor1}
                            value={isCheckedTextColor1}
                            onValueChange={() => handleTextColor(1)}
                            color={isCheckedTextColor1 ? '#4630EB' : undefined}
                        />
                        <Checkbox
                            style={styles.textColor2}
                            value={isCheckedTextColor2}
                            onValueChange={() => handleTextColor(2)}
                            color={isCheckedTextColor2 ? '#4630EB' : undefined}
                        />

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
                <ColorPickerComponent close={() => setColorModal(false)} />
            )}
        </View>
    )
}