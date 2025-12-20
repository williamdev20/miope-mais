import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#f5f5f5"
    },

    subContainer: {
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        width: "100%"
    },
    
    logo: {
        width: 150,
        height: 150,
        
    },

    formContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: 15,
    },

    label: {
        alignSelf: "flex-start",
        marginLeft: "8%",
        fontSize: 15
    },

    input: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#999",
        height: 60,
        borderRadius: 10,
        paddingHorizontal: 15
    },

    registerContainer: {
        flexDirection: "row"
    },

    goSignUp: {
        color: "#00ccffff"
    },

    button: {
        backgroundColor: "brown",
        width: "90%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        borderRadius: 10
    },

     textButton: {
        color: "#fff",
        fontSize: 17
    },

    googleContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },

    googleButton: {
        backgroundColor: "#fff",
        width: "90%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000"
    },

    googleImage: {
        width: 30,
        height: 30
    },
});