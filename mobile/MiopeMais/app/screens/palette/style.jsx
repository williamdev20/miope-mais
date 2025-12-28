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
        marginTop: 70,
    },

    previousBookHeader: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000
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
        bottom: "10%",
        position: "absolute",
        zIndex: 2      
    }
})