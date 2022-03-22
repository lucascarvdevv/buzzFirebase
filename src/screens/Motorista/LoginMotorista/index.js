import React from "react";
import { View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text, Keyboard, Pressable } from "react-native";
import { Container } from './style';

import Onibus from '../../../img/Onibus.svg';

export default function LoginMotorista({ navigation }) {

    const clicouLogin = () => {
        /*navigation.navigate("Cadastro")*/
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
    }

    const clicou = () => {
        /*navigation.navigate('Cartao')*/
        navigation.reset({
            index: 0,
            routes: [{ name: "PerfilMotorista" }]
        })
    }

    return (
        <View style={Container.MainContainer}>
            <Pressable onPress={Keyboard.dismiss}>
                <View style={Container.InputArea}>

                    <Text style={Container.TextoTitulo}> Seja bem vindo! </Text>

                    <View style={Container.InputLogin}>
                        <Text style={Container.Texto}>Email</Text>
                        <TextInput style={Container.input} />

                        <Text style={Container.Texto}> Senha</Text>
                        <TextInput style={Container.input} secureTextEntry={true} />

                        <TouchableOpacity style={Container.botao} onPress={() => { clicou() }}>
                            <Text style={Container.botaoText}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[Container.textoCadastro, {bottom: 10}]} onPress={() => clicouLogin()}>
                            <Text style={{ color: "#6558f5" }}>Fazer login como<Text style={{fontWeight: 'bold'}}> Aluno</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={Container.LogoBuzz}>
                    <Onibus width="15%" height="45" />
                    <Text style={Container.TextoLogo}>BUZZ</Text>
                </View>

            </Pressable>
        </View>
    );
}