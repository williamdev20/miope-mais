import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkCredentials = () => {
        
    }

    return (
        <View style={styles.container}>
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
                <TouchableOpacity
                style={styles.button}
                >
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>

            {/*<Text>Olá, {email}</Text>*/}
        </View>
    );
}