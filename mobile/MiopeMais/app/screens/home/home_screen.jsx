import { useState } from "react";
import { View, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { File } from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";
import { styles } from "./styles/style";
import Menu from "./menu";

export default function HomeScreen({ navigation }) {

    const [showMenu, setShowMenu] = useState(false);

    const pickFile = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true });
            
            if (result.canceled) {
                console.log("User canceled upload!");
                return;
            }

            const file = new File(result.assets[0]);
            console.log("Upload done sucessfully!")

        } catch (error) {
            console.log(`Houve um erro: [ERROR] ${error}`);
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Image style={styles.logo} source={require("../../../assets/logo/miope-mais-logo.png")} />
                <TouchableOpacity onPress={() => setShowMenu(true)}>
                    <Image style={styles.settingsIcon} source={require("../../../assets/home/settings.png")} />
                </TouchableOpacity>
            </View>

            {showMenu && (
                <TouchableWithoutFeedback onPress={() => setShowMenu(false)}>
                    <View style={styles.blurContainer}></View>
                </TouchableWithoutFeedback>
            )}

            {showMenu && (
                <Menu close={() => setShowMenu(false)} />
            )}


            <View style={styles.libraryContainer}>

                <TouchableOpacity onPress={pickFile} style={styles.createBook}>
                    <Text style={styles.createBookText}>+</Text>
                </TouchableOpacity>

                <View style={styles.libraryContainer}>
                    <View style={styles.book}>
                        <Text>Livro</Text>
                    </View>
                </View>
                
            </View>


        </View>
    );
}