import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/menu";
import { useNavigation } from "expo-router";

export default function Menu({ close }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.headerMenu}>
                <TouchableOpacity onPress={close} style={styles.closeIcon}>
                    <Image style={styles.closeIcon} source={require("../../../assets/home/close.png")} />
                </TouchableOpacity>
            </View>

            <View style={styles.optionsPreference}>
                <TouchableOpacity onPress={() => navigation.navigate("Font")}>
                    <Text style={styles.options}>Ajustar cor de fundo</Text>
                </TouchableOpacity>

                <View style={styles.line} />

                <TouchableOpacity onPress={() => navigation.navigate("Palette")}>
                    <Text style={styles.options}>Ajustar tamanho da fonte</Text>
                </TouchableOpacity>
                <View style={styles.line} />
            </View>

        </View>
    );
}