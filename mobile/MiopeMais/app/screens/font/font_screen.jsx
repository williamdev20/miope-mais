import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "./style";
import PreviousBook from "../../../components/PreviousBook";

export default function FontScreen() {
    const [fontSize, setFontSize] = useState(15);
    
    const increaseFontSizeFunc = () => {
        setFontSize(fontSize+2);
    }

    const decreaseFontSizeFunc = () => {
        if (fontSize > 0) {
            while (fontSize > 0) {
                setFontSize(fontSize-2);
            }
        }
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainHeaderContainer}>
                <View style={styles.previousBookContainer}>
                    <PreviousBook />
                </View>
                <Text style={styles.textHeader}>Tamanho da fonte</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={increaseFontSizeFunc} style={styles.increaseFontSize}>
                    <Text style={styles.increaseFontSizeText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={decreaseFontSizeFunc} style={styles.decreaseFontSize}>
                    <Text style={styles.decreaseFontSizeText}>-</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.previewFontSizeContainer}>
                <Text style={[styles.previewFontSizeText, {fontSize: fontSize}]}>Resultado final aqui</Text>
            </View>

            <View style={styles.footerContainer}>
                <TouchableOpacity>
                    <Text style={styles.buttonSave}>Salvar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}