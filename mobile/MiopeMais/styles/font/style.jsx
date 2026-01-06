import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },

    mainHeaderContainer: {
        flex: 0.5,
        width: "100%",
        flexDirection: "column",
        top: 0,
        margin: 20,
    },

    previousBookContainer: {
        flex: 0.5,
        marginTop: 15,
        
        top: 0,
        left: 20,
        zIndex: 1
    },

    textHeader: {
        fontSize: 50,
        color: "#fff",
        textAlign: "center"
    },

    buttonContainer: {
        flex: 0.5,
        backgroundColor: "transparent",
        width: "80%",
        height: "15%",
        flexDirection: "row",
        gap: "25%",
        bottom: "10%",
        justifyContent: "center",
        alignItems: "center",
        margin: 15
    },

    increaseFontSize: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1e1e1e",
        width: 100,
        height: 100,
        borderRadius: 10
    },

    increaseFontSizeText: {
        fontSize: 45,
        color: "#fff"
    },

    decreaseFontSize: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1e1e1e",
        width: 100,
        height: 100,
        borderRadius: 10
    },

    decreaseFontSizeText: {
        fontSize: 65,
        color: "#fff"
    },

    previewFontSizeText: {
        color: "#fff"
    },

    previewFontSizeContainer: {
        flex: 0.5,
        borderWidth: 1,
        borderColor: "#fff",
        width: "85%",
        height: "25%",
        bottom: "15%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        margin: 20
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
        bottom: "10%",
    }
})