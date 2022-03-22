import React from "react";
import { View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text, Keyboard, Pressable } from "react-native";
import { Container } from './style';

import Onibus from '../../../img/Onibus.svg';


export default function Login({ navigation }) {

    const clicouCadastro = () => {
        /*navigation.navigate("Cadastro")*/
        navigation.reset({
            index: 0,
            routes: [{ name: "Cadastro" }]
        })
    }

    const clicou = () => {
        /*navigation.navigate('Cartao')*/
        navigation.reset({
            index: 0,
            routes: [{ name: "Perfil" }]
        })
    }

    const clicouLoginMotorista = () => {
        /*navigation.navigate('Cartao')*/
        navigation.reset({
            index: 0,
            routes: [{ name: "LoginMotorista" }]
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

                        <TouchableOpacity style={Container.textoCadastro} onPress={() => clicouCadastro()}>
                            <Text style={{ color: "#6558f5" }}>Ainda não possui uma conta?</Text>
                            <Text style={{ fontWeight: "bold", color: "#6558f5" }}> Cadastre-se</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[Container.textoCadastro, {bottom: 10}]} onPress={() => clicouLoginMotorista()}>
                            <Text style={{ color: "#6558f5" }}>Fazer login como<Text style={{fontWeight: 'bold'}}> Motorista</Text></Text>
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