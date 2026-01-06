import * as DocumentPicker from "expo-document-picker";
import { File } from "expo-file-system";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "@/styles/home/style";
import Menu from "./menu";

export default function HomeScreen({ navigation }) {
    useEffect(() => {
        NavigationBar.setVisibilityAsync("hidden");
        NavigationBar.setButtonStyleAsync("dark");
    }, []);

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
            console.log(`There was an error: [ERROR] ${error}`);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                hidden={true}
                style="auto"
                backgroundColor="#000"
            />

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
                <Menu close={() => setShowMenu(false)} navigation={navigation}/>
            )}

            <ScrollView scrollEnabled={!showMenu} pointerEvents={showMenu ? "none" : "auto"}>
                <View style={styles.libraryContainer}>

                    <TouchableOpacity onPress={pickFile} style={styles.createBook}>
                        <Text style={styles.createBookText}>+</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => navigation.navigate("Book")} style={styles.book}>
                        <Text>Livro</Text>
                    </TouchableOpacity>
                    
                    
                    {/* SÓ TESTE DAQUI PRA BAIXO */}
                    <TouchableOpacity style={styles.book}>
                        <Text>Livro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.book}>
                        <Text>Livro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.book}>
                        <Text>Livro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.book}>
                        <Text>Livro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.book}>
                        <Text>Livro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.book}>
                        <Text>Livro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.book}>
                        <Text>Livro</Text>
                    </TouchableOpacity>
                    
                    

                </View>
            </ScrollView>


        </View>
    );
}