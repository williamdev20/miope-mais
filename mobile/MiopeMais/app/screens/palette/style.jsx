import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#000"
    },

    changeColorsContainer: {
        gap: 25,
        width: "100%",
        padding: 10,
    },

    headerContainer: {
        top: 0,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 70
    },

    textHeader: {
        fontSize: 70,
        textAlign: "center",
        color: "#fff"
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
        backgroundColor: "#fff"
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

    color1: {
        backgroundColor: "red",
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5
    },

    color2: {
        backgroundColor: "blue",
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5
    },

    color3: {
        backgroundColor: "green",
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5
    },

    color4: {
        backgroundColor: "brown",
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5
    },

    editIcon: {
        width: 30,
        height: 30,
        backgroundColor: "#fff"
    },

    colorPickerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1,
        backgroundColor: "#131416ff"
    },

    colorPicker: {
        width: "100%",
        height: "100%",
        padding: "7%",
        marginBottom: "45%"
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

    footerContainer: {
        bottom: "10%",
        position: "absolute",
        zIndex: 2      
    }
})