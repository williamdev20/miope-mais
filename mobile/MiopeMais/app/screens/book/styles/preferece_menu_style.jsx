import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        width: "100%",
        height: "100%",
        top: 0,
        zIndex: 0,
        position: "absolute"
    },

    headerContainer: {
        alignItems: "center",   
        justifyContent: "center",
        width: "100%",
        gap: "65%",
        flexDirection: "row",
        backgroundColor: "#000",
        padding: 35,
        top: 0,
        position: "absolute",
        zIndex: 1000
    },

    preferenceContainer: {
        flex: 1,
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        alignSelf: "flex-end",
    },

    palleteIcon: {
        width: 35,
        height: 35,
        backgroundColor: "#fff",
        borderRadius: 100
    },

    fontIcon: {
        fontSize: 20,
        color: "#fff"
    },

    footerContainer: {
        alignItems: "center",   
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#000",
        padding: 35,
        bottom: 0,
        position: "absolute",
        zIndex: 1000
    },

    footerText: {
        color: "#fff"
    },

    nextPageIcon: {
        color: "#fff",
        fontSize: 20
    },

    previousPageIcon: {
        color: "#fff",
        fontSize: 20
    }
})