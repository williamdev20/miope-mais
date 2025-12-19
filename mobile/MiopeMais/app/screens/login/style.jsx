import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },

    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: 15,
    },

    label: {
        justifyContent: "flex-start"
    },

    input: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#999",
        width: "80%"
    },

    button: {
        backgroundColor: "brown",
        width: "80%",
        height: "5%",
        alignItems: "center",
        justifyContent: "center"
    },

     textButton: {
        color: "#fff"  
    }
});