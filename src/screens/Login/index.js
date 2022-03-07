import React, { useEffect } from "react";
import { Container } from './style';
import { View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text,  Keyboard, Pressable} from "react-native";
import Onibus from '../../img/Onibus.svg';
import { useNavigation  } from "@react-navigation/native";
/*import { Input, Text } from 'react-native-elements';*/


export default function Login({navigation}) {
    
    const clicouCadastro = () => {
        /*navigation.navigate("Cadastro")*/
        navigation.reset({
            index: 0,
            routes: [{name: "Cadastro"}]
        })
    }
   
    const clicou = () => {
        /*navigation.navigate('Principal')*/
        navigation.reset({
           index: 0,
           routes: [{name: "Principal"}]
       })
    }

    return (
        <View style={Container.MainContainer}>
            <Pressable onPress={Keyboard.dismiss}>
           
            <View style={Container.InputArea}>

                <Text style={Container.TextoTitulo}> Seja bem vindo! </Text>
                
                <View style={Container.InputLogin}>
                    <Text style={Container.Texto}>  Usuário</Text>
                    <TextInput style={Container.input} />

                    <Text style={Container.Texto}>Senha</Text>
                    <TextInput style={Container.input} />

                    <TouchableOpacity style={Container.botao} onPress={ () => {clicou()}}>
                        <Text style={Container.botaoText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Container.textoCadastro} onPress={() => clicouCadastro()}>
                        <Text style={{color: "#6558f5"}}>Ainda não possui uma conta?</Text>
                        <Text style={{fontWeight: "bold", color: "#6558f5"}}> Cadastre-se</Text>
                    </TouchableOpacity>                
                </View>           
            </View>
            <View style={Container.Container}>
                <Onibus width="15%" height="45" />
                <Text style={Container.TextoLogo}>BUZZ</Text>
            </View>
            </Pressable>
        </View>
    );
}