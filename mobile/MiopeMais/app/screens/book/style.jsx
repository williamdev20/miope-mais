import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#f5f5f5"
    },

    area: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "trasnparent",
        width: "100%",
        height: "100%",
        top: 0,
        position: "absolute",
        zIndex: 1000,
    },

    zone: {
        backgroundColor: "transparent",
        height: "100%",
        flex: 1,
    },

    textBook: {
        padding: 20
    }
})