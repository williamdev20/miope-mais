import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        backgroundColor: "#f5f5f5"
    },

    headerContainer: {
        alignItems: "center",   
        justifyContent: "center",
        width: "100%",
        flexDirection: "row",
        gap: "80%",
        backgroundColor: "#c2c2c2ff",
        padding: 25,
        top: 0,
        position: "absolute",
        zIndex: 1000
    },

    logo: {
        width: 40,
        height: 40,
    },

    settingsIcon: {
        width: 30,
        height: 30,
    },

    libraryContainer: {
        justifyContent: "center",
        paddingTop: Platform.OS === "web" ? "13%" : "40%",
        gap: 70,
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: "20%"
    },

    createBook: {
        backgroundColor: "#d6cfcfff",
        width: 130,
        height: 150,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },

    createBookText: {
        fontSize: 40
    },

    book: {
        backgroundColor: "#dbdadcff",
        width: 130,
        height: 150,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },

    blurContainer: {
        backgroundColor: "rgba(0,0,0,0.4)",
        width: "100%",
        top: 0,
        height: "100%",
        position: "absolute",
        zIndex: 1000,
    }
})