import { View, Text, TouchableWithoutFeedback } from "react-native";
import { styles } from "./style";
import { useState } from "react";

export default function BookScreen() {

    const objetoDoLivro = {1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.[ PARTE 01 ]", 2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 02 ]", 3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 03 ]", 4: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. [ PARTE 04 ]"};
    
    const [currentPage, setCurrentPage] = useState(0);

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


    return (
        <View style={styles.container}>

            <View style={styles.area}>
                <TouchableWithoutFeedback onPress={previousPage} >
                    <View style={styles.zone} />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => alert("Centro")} >
                    <View style={styles.zone} />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={nextPage} >
                    <View style={styles.zone} />
                </TouchableWithoutFeedback>
            </View>

            <View style={styles.textBook}>
                
                <Text>
                    {Object.values(objetoDoLivro)[currentPage]}
                </Text>

                {/*{ Object.values(objetoDoLivro).map((content, page) => {
                    return <Text key={page}>{currentPage}</Text>
                }) }*/}
                
            </View>
        </View>
    )
}
