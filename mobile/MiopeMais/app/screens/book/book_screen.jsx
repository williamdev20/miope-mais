import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import { styles } from "./styles/style";
import { useState } from "react";
import PreferenceMenu from "./preference_menu";

// Para implementações futuras: Permitir que o usuário controle a página atual pelos botões de volume do celular
// OBS: Falta permitir o usuário de fazer scroll de uma página
export default function BookScreen() {

    const objetoDoLivro = {1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 01 ]. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 01 ]. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 01 ]. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 01 ]. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 01 ]. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 01 ]", 2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 02 ]", 3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 03 ]", 4: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 04 ]"};
    const numberOfPages = Object.keys(objetoDoLivro).length

    const [currentPage, setCurrentPage] = useState(0);
    const [showPreferenceMenu, setShowPreferenceMenu] = useState(false);

    const zIndexStyle = showPreferenceMenu ? { zIndex: 0 } : { zIndex: 1 }
    const textContainerStyle = showPreferenceMenu ? {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    } : {}
    const textBookStyle = showPreferenceMenu ? {
        paddingHorizontal: 30,
        paddingVertical: 20,
        width: "80%",
        height: "73%"
    } : {}

    
    // Page functions
    const nextPage = () => {
        if (currentPage != (Object.keys(objetoDoLivro).length - 1)) {
            return setCurrentPage(currentPage + 1);
        } else {
            return 0;
        }
    }

    const previousPage = () => {
        if (currentPage != 0) {
            return setCurrentPage(currentPage - 1);
        } else {
            return 0;
        }
    }

    const NextOrPreviousPageWithSlider = (value) => {
        if (value > currentPage) {
            nextPage();
        } else {
            previousPage();
        }
    }

    // Preference menu functions
    const preferenceMenuFunc = () => {
        // OBS: Talvez eu precise colocar um if aqui pra atribuir essas estilizações apenas se o showPreference for True
        // PS: Deu bom não :(
        // PS2: DEU BOM SIM :D
        setShowPreferenceMenu(true);        
    }

    return (
        <View style={styles.container}>

            <View style={[styles.area, zIndexStyle]}>
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
                <PreferenceMenu
                    closePreferenceMenu={() => setShowPreferenceMenu(false)}
                    nextPageProps={nextPage}
                    previousPageProps={previousPage}
                    NextOrPreviousPageWithSliderProps={NextOrPreviousPageWithSlider}
                    numberOfPages={numberOfPages}
                    currentPage={currentPage+1}
                />
            )}

            
            <View style={[styles.textContainer, textContainerStyle]}>
                <View style={[styles.textBook, textBookStyle]}>
                    
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
