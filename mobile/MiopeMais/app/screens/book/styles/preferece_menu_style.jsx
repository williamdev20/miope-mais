import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
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
        justifyContent: "space-between",
        width: "100%",
        gap: "65%",
        flexDirection: "row",
        backgroundColor: "#000",
        padding: 35,
        top: 0,
        position: "absolute",
        zIndex: 1002,
    },

    closeContainer: {
        flexDirection: "row",
        gap: 20
    },

    exitIcon:{
        width: 35,
        height: 35,
        backgroundColor: "#fff",
        borderRadius: 100,
        zIndex: 1001
    },

    preferenceContainer: {
        flex: 1,
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        position: "absolute",
        right: 25
    },

    palleteIcon: {
        width: 35,
        height: 35,
        backgroundColor: "#fff",
        borderRadius: 100,
        zIndex: 1001
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
        bottom: Platform.OS == "web" ? 0 : "4%",
        padding: 10,
        position: "absolute",
        zIndex: 1000
    },

    footerText: {
        color: "#fff",
    },

    progressBookContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        zIndex: 1005
    },

    nextPageIcon: {
        color: "#fff",
        fontSize: 30,
        width: 50,
    },

    previousPageIcon: {
        color: "#fff",
        fontSize: 30,
        width: 50
    }
})