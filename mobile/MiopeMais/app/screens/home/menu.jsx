import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/menu";

export default function Menu({ close }) {
    return (
        <View style={styles.container}>
            
            <View style={styles.headerMenu}>
                <TouchableOpacity onPress={close} style={styles.closeIcon}>
                    <Image style={styles.closeIcon} source={require("../../../assets/home/close.png")} />
                </TouchableOpacity>
            </View>

            <View style={styles.optionsPreference}>
                <Text style={styles.options}>Ajustar cor de fundo</Text>
                <View style={styles.line} />
                <Text style={styles.options}>Ajustar tamanho da fonte</Text>
                <View style={styles.line} />
            </View>

        </View>
    );
}