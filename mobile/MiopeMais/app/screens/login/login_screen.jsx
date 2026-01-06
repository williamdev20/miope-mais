import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { userFormSchema } from "@/schemas/user";
import { styles } from "@/styles/login/style";

export default function LoginScreen({ navigation }) {
    useEffect(() => {
        NavigationBar.setButtonStyleAsync("dark");
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const checkCredentials = () => {
        const result = userFormSchema.safeParse({email, password});

        if (!result.success) {
            const fieldErrors = {};

            result.error.issues.forEach(err => {
                const field = err.path[0];
                fieldErrors[field] = err.message;
            });

            setErrors(fieldErrors);
            alert(Object.values(fieldErrors).join("\n"));
            return;
        }

        setErrors({});
    }

    return (
        <View style={styles.container}>
            <StatusBar
                style="dark"
                backgroundColor="#000"
            />

            <View style={styles.subContainer}>
                <View style={styles.headerContainer}>
                    <Image style={styles.logo} source={require("../../../assets/logo/miope-mais-logo.png")}/>
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu email aqui"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite sua senha aqui"
                        value={password}
                        onChangeText={setPassword}
                        keyboardType="default"
                        secureTextEntry={true}
                    />

                    <View style={styles.registerContainer}>
                        <Text>Não tem uma conta? </Text><Text
                            style={styles.goSignUp}
                            onPress={() => navigation.navigate("Signup")}>
                        Crie agora!
                        </Text>
                    </View>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={checkCredentials}
                    >
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.googleButton}
                    >
                        <View style={styles.googleContainer}>
                            <Image style={styles.googleImage} source={require("../../../assets/login/google.png")} />
                            <Text style={styles.googleTextButton}>Continuar com Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}