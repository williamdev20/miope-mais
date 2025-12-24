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
        justifyContent: "center",
        backgroundColor: "trasnparent",
        width: "100%",
        height: "100%",
        top: 0,
        position: "absolute",
    },

    touchZone: {
        backgroundColor: "transparent",
        height: "100%",
        flex: 1,
    },

    textContainer: {},

    textBook: {
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: "lightyellow"
    },
})