import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#000b3e"
    },

    mainHeaderContainer: {
        alignItems: "center",   
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        marginTop: 100,
        top: 0,
        position: "absolute"
    },

    previousBookContainer: {
        marginBottom: 50,
        top: 0,
        left: 0,
        position: "absolute"
    },

    textHeader: {
        fontSize: 50,
        color: "#fff",
        textAlign: "center"
    },

    buttonContainer: {
        backgroundColor: "transparent",
        width: "80%",
        height: "15%",
        flexDirection: "row",
        gap: "30%",
        marginTop: 60,
        marginBottom: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    increaseFontSize: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        borderRadius: 10
    },

    increaseFontSizeText: {
        fontSize: 45
    },

    decreaseFontSize: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffffff",
        width: 100,
        height: 100,
        borderRadius: 10
    },

    decreaseFontSizeText: {
        fontSize: 65
    },

    previewFontSizeText: {
        color: "#fff"
    },

    previewFontSizeContainer: {
        borderWidth: 1,
        borderColor: "#fff",
        width: "85%",
        height: "25%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },

    previewFontSizeText: {
        fontSize: 15,
        color: "#fff"
    },

    footerContainer: {
        alignItems: "center",   
        justifyContent: "center",
        width: "100%",
        flexDirection: "row",
        marginBottom: 85,
        bottom: 0,
        position: "absolute",
        zIndex: 1000
    },

    buttonSave: {
        backgroundColor: "lightgreen",
        padding: 10,
        width: 130,
        height: 50,
        textAlign: "center",
        borderRadius: 10,
        fontSize: 20
    }
})