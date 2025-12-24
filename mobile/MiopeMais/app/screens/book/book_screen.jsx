import { View, Text, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles/style";
import { useState } from "react";
import PreferenceMenu from "./preference_menu";

// Para implementações futuras: Permitir que o usuário controle a página atual pelos botões de volume do celular

export default function BookScreen() {

    const objetoDoLivro = {1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 01 ]", 2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 02 ]", 3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 03 ]", 4: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 04 ]"};

    const [currentPage, setCurrentPage] = useState(0);
    const [showPreferenceMenu, setShowPreferenceMenu] = useState(false);

    // Styles config on access Preference Menu
    const [flex, setFlex] = useState(0);
    const [justifyContent, setJustifyContent] = useState("");
    const [alignItems, setAlignItems] = useState("");
    const [paddingHorizontal, setPaddingHorizontal] = useState(20);
    const [paddingVertical, setPaddingVertical] = useState(40);
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");


    const [zIndex, setZIndex] = useState(1);

    // Page functions
    const nextPage = () => {
        if (currentPage != (Object.keys(objetoDoLivro).length - 1)) {
            setCurrentPage(currentPage + 1);
        } else {
            return;
        }
    }

    const previousPage = () => {
        if (currentPage != 0) {
            setCurrentPage(currentPage - 1);
        } else {
            return;
        }
    }

    // Preference menu functions
    const preferenceMenuFunc = () => {
        // OBS: Talvez eu precise colocar um if aqui pra atribuir essas estilizações apenas se o showPreference for True
        // PS: Deu bom não :(
        // PS2: DEU BOM SIM :D
        setShowPreferenceMenu(true);
       
        if (showPreferenceMenu === true) {
            // area
            setZIndex(0);
            // textContainer
            setFlex(1);
            setJustifyContent("center");
            setAlignItems("center");
            // textBook
            setPaddingHorizontal(30);
            setPaddingVertical(20);
            setWidth("80%");
            setHeight("75%");
        }
        
    }

    return (
        <View style={styles.container}>

            <View style={[styles.area, {
                zIndex: zIndex
            }]}>
                <TouchableWithoutFeedback onPress={previousPage} >
                    <View style={styles.touchZone} />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={preferenceMenuFunc}>
                    <View style={styles.touchZone} />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={nextPage} >
                    <View style={styles.touchZone} />
                </TouchableWithoutFeedback>
            </View>

            {showPreferenceMenu && (
                <PreferenceMenu closePreferenceMenu={() => setShowPreferenceMenu(false)} />
            )}

            <View style={[styles.textContainer, {
                flex: flex,
                justifyContent: justifyContent,
                alignItems: alignItems
            }]}>
                <View style={[styles.textBook, {
                    paddingHorizontal: paddingHorizontal,
                    paddingVertical: paddingVertical,
                    width: width,
                    height: height  
                }]}>
                    
                    <Text>
                        {Object.values(objetoDoLivro)[currentPage]}
                    </Text>

                    {/*{ Object.values(objetoDoLivro).map((content, page) => {
                        return <Text key={page}>{currentPage}</Text>
                    }) }*/}
                    
                </View>
            </View>
        </View>
    )
}
