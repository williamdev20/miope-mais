import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        backgroundColor: "lightyellow"
    },

    area: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        top: 0,
        position: "absolute",
    },

    touchZone: {
        backgroundColor: "transparent",
        height: "100%",
        width: "25%",
        zIndex: 1000
    },

    textContainer: {},

    textBook: {
        paddingHorizontal: 20,
        paddingTop: 30,
        backgroundColor: "lightyellow"
    },

    textContent: {
        fontSize: 15
    }
})