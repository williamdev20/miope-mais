import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        const checkCredentials = () => {
            if (email.trim() === "" && password.trim() === "") {
                alert("Campos faltando!")
            }
        }
    
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Image style={styles.logo} source={require("../../../assets/logo/miope-mais-logo.png")}/>
    
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
                            <Text>Já tem uma conta? </Text><Text
                                style={styles.goSignUp}
                                onPress={() => navigation.navigate("Login")}>
                            Faça login!
                            </Text>
                        </View>
    
                        <TouchableOpacity
                        style={styles.button}
                        onPress={checkCredentials}
                        >
                            <Text style={styles.textButton}>Criar conta</Text>
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