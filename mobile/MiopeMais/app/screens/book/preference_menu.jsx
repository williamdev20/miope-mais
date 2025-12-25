import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles/preferece_menu_style";
import Previous from "../../../components/Previous";
import Slider from "@react-native-community/slider";
import { useNavigation } from "expo-router";

export default function PreferenceMenu({
    closePreferenceMenu,
    nextPageProps,
    previousPageProps,
    NextOrPreviousPageWithSliderProps,
    numberOfPages,
    currentPage
}) {
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
                <Text style={styles.footerText}>{currentPage}/{numberOfPages}</Text>

                <View style={styles.progressBookContainer}>
                    <Text style={styles.nextPageIcon} onPress={previousPageProps}>{"<-"}</Text>
                    <Slider 
                        style={{width: 240, height: 45}}
                        disabled={false}
                        thumbTintColor="#fff"
                        minimumValue={1}
                        maximumValue={numberOfPages}
                        value={currentPage}
                        step={1}
                        onValueChange={NextOrPreviousPageWithSliderProps}
                        minimumTrackTintColor="#4a4040ff"
                        maximumTrackTintColor="#FFF"
                    />
                    <Text style={styles.previousPageIcon} onPress={nextPageProps}>{"->"}</Text>
                </View>
            </View>
            
        </View>
    )
}