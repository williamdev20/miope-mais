import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles/preferece_menu_style";
import Previous from "../../../components/Previous";
import Slider from "@react-native-community/slider";
import { useNavigation } from "expo-router";

// commit: Adicionar menu de preferências na tela de leitura
export default function PreferenceMenu({ closePreferenceMenu }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Previous closePreferenceMenuByPreviousFunc={closePreferenceMenu} />
                <View style={styles.preferenceContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image style={styles.palleteIcon} source={require("../../../assets/preference/pallete.png")}/>
                    </TouchableOpacity>
                    <Text style={styles.fontIcon} onPress={() => navigation.navigate("Home")}>Aa</Text>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Aqui é o Footer seu otário</Text>
                <Text>{"<-"}</Text>
                <Slider 
                    style={{width: 250, height: 80}}
                    disabled={false}
                    thumbTintColor="#fff"
                    minimumValue={0}
                    maximumValue={100}
                    value={25}
                    minimumTrackTintColor="#4a4040ff"
                    maximumTrackTintColor="#FFF"
                />
                <Text>{"->"}</Text>
            </View>
            
        </View>
    )
}