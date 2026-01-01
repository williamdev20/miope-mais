import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#000",
        paddingTop: 150,
        paddingBottom: 100
    },

    changeColorsContainer: {
        padding: 10,
        justifyContent: "center",
        width: "95%",
        maxWidth: 900,
        flexDirection: "column",
        gap: 25,
    },

    headerContainer: {
        position: "absolute",
        justifyContent: "center",
        width: "100%",
        margin: 20,
        gap: "80%",
        padding: 25,
        top: 0,
        paddingVertical: 20,
        paddingHorizontal: 25,
        width: "100%",
    },

    previousBookHeader: {
        marginTop: 15,
        position: "absolute",
        top: 0,
        left: 20,
        zIndex: 1
    },

    textHeader: {
        flex: 1,
        fontSize: Platform.OS === "web" ? Math.min(RFValue(30), 60) : RFValue(60),
        textAlign: "center",
        color: "#fff",
        flexShrink: 1
    },

    backgroundContainer: {
        backgroundColor: "#131416ff",
        width: "100%",
        borderRadius: 10,
        padding: 15
    },

    headerBackgroundContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        marginBottom: 7
    },

    paletteIcon: {
        width: 30,
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 100
    },

    genericText: {
        color: "#fff"
    },

    changeBackgroundColorContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },

    previewColor: {
        borderWidth: 1,
        borderColor: "#fff",
        width: 75,
        height: 75,
        borderRadius: 5
    },

    colorContainer1: {
        gap: 5
    },

    colorContainer2: {
        gap: 5
    },

    backgroundColor1: {
        backgroundColor: "#f5f5f5",
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5
    },

    backgroundColor2: {
        backgroundColor: "#1e1e1e",
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5
    },

    backgroundColor3: {
        backgroundColor: "#000b3e",
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5
    },

    backgroundColor4: {
        backgroundColor: "#FFFFE0",
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5
    },

    editIcon: {
        width: 30,
        height: 30,
        backgroundColor: "#f2ececff",
        borderRadius: 5
    },

    textContainer: {
        backgroundColor: "#131416ff",
        width: "100%",
        borderRadius: 10,
        padding: 15
    },

    headerTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        marginBottom: 7
    },

    changeTextColorContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },

    textColor1: {
        backgroundColor: "#f5f5f5",
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5
    },

    textColor2: {
        backgroundColor: "#1e1e1e",
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5
    },

    footerContainer: {
        bottom: Platform.OS === "web" ? "5%" : "12%",
        position: "absolute",
        zIndex: 2      
    }
})