import Slider from "@react-native-community/slider";
import { useNavigation } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Previous from "../../../components/Previous";
import { styles } from "@/styles/book/preferece_menu_style";

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
        <View style={styles.container} pointerEvents="box-none">

            <View style={styles.headerContainer} pointerEvents="auto">
                <View style={styles.closeContainer}>
                    <Previous closePreferenceMenuByPreviousFunc={closePreferenceMenu} />
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image style={styles.exitIcon} source={require("../../../assets/preference/exit.png")} />
                    </TouchableOpacity>
                </View>

                <View style={styles.preferenceContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Palette")}>
                        <Image style={styles.palleteIcon} source={require("../../../assets/preference/pallete.png")}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Font")}>
                        <Text style={styles.fontIcon}>Aa</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footerContainer} pointerEvents="auto">
                <Text style={styles.footerText}>{currentPage}/{numberOfPages}</Text>

                <View style={styles.progressBookContainer}>
                    <TouchableOpacity onPress={previousPageProps}>
                        <Text style={styles.nextPageIcon}>{"<-"}</Text>
                    </TouchableOpacity>
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
                    <TouchableOpacity onPress={nextPageProps}>
                        <Text style={styles.previousPageIcon}>{"->"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}