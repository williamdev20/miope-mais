import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eae7e7ff",
        width: "60%",
        right: 0,
        top: 0,
        height: "100%",
        position: "absolute",
        zIndex: 1000,
        elevation: 10
    },

    headerMenu: {
        width: "100%",
        flexDirection: "row",
        gap: "80%",
        marginTop: 25,
        top: 0,
        position: "absolute",
        alignSelf: "flex-end"
    },

    closeIcon: {
        position: "absolute",
        width: 40,
        height: 40,
        marginTop: "5%",
        gap: 30,
        right: 0,
        marginRight: "7%"
    },

    optionsPreference: {
        position: "absolute",
        top: "20%",
        left: 0,
        width: "100%"
    },

    options: {
        alignSelf: "flex-start",
        marginLeft: 20,
        fontSize: 16,
        marginTop: 20
    },

    line: {
        alignSelf: "flex-start",
        marginLeft: 20,
        height: 1,
        backgroundColor: "#000",
        width: "80%",
        marginVertical: 10
    }
})