import React from "react";
import { Container } from './style';
import { View, TextInput, TouchableOpacity, Text, Keyboard, Pressable, Alert, ScrollView, Label, KeyboardAvoidingView, } from "react-native";
import Onibus from '../../../img/Onibus.svg';
import { CheckBox, Input } from "react-native-elements";
import { useState, useEffect } from "react";
import firebase from '../../../config/firebase-config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { useRoute } from "@react-navigation/native";




export default function Cadastro({navigation, route} ) {
    const database = firebase.firestore()
    

    const clicouLogin = () => {
        navigation.navigate("Login")
    }
    const [segunda, setSegunda] = useState(false);
    const [terca, setTerca] = useState(false);
    const [quarta, setQuarta] = useState(false);
    const [quinta, setQuinta] = useState(false);
    const [sexta, setSexta] = useState(false);
    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [cpass, setCpass] = useState(null)
    const [faculdade, setFaculdade] = useState(null)
    const [curso, setCurso] = useState(null)
    const [periodo, setPeriodo] = useState(null)


    const [errorEmail, setErrorEmail] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [errorCPassword, setErrorCPassword] = useState(null)
    const [errorFaculdade, setErrorFaculdade] = useState(null)
    const [errorCurso, setErrorCurso] = useState(null)
    const [errorPeriodo, setErrorPeriodo] = useState(null)
    const [isLoading, setLoading] = useState(false)

    
    const validar = () => {
        let error = false
        setErrorPeriodo(null)
        setErrorFaculdade(null)
        setErrorCurso(null)
        setErrorNome(null)
        setErrorEmail(null)
        setErrorPassword(null)
        setErrorCPassword(null)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(email).toLowerCase())) {
            setErrorEmail("Preencha o email corretamente")
            error = true
        }

       
        if (password == null && password != cpass) {
            setErrorPassword("Preencha com uma senha válida")
            error = true
        }

        if (password != cpass) {
            setErrorCPassword("As senhas nao coincidem, tente novamente")
            error = true
        }

        return !error
    }

    const auth = getAuth();

    function createUser () {
createUserWithEmailAndPassword( auth, email, password)
  .then((userCredential) => {
    
    let user = userCredential.user;
    navigation.navigate("CriarPerfil", {idUser: user.uid})
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
  });
}

       

    
    {



        return (
            <View style={Container.MainContainer}>
                <ScrollView>
                    <Pressable onPress={Keyboard.dismiss}>
                        <View style={Container.InputArea}>
                            <View style={Container.InputLogin}>

                                

                                <Text style={Container.Texto}>Email</Text>
                                <Input style={Container.TextInput}

                                    onChangeText={value => {
                                        setErrorNome(null)
                                        setEmail(value)

                                    }}
                                    errorMessage={errorEmail}
                                />

                                <Text style={Container.Texto}>Senha</Text>
                                <Input style={Container.TextInput}
                                    secureTextEntry={true}
                                    onChangeText={value => {
                                        setErrorPassword(null)
                                        setPassword(value)
                                    }}
                                    errorMessage={errorPassword}
                                />

                                <Text style={Container.Texto}>Confirmar senha</Text>
                                <Input style={Container.TextInput}
                                    secureTextEntry={true}
                                    onChangeText={value => {

                                        setErrorCPassword(null)
                                        setCpass(value)
                                    }}
                                    errorMessage={errorCPassword}
                                />

                               

                                <TouchableOpacity style={Container.botao} onPress={() =>{createUser()}}>
                                    <Text style={Container.botaoText}>Cadastrar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={Container.textoCadastro} onPress={() => { clicouLogin() }}>
                                    <Text style={{ color: "#6558f5" }}>Já possui uma conta?</Text>
                                    <Text style={{ fontWeight: "bold", color: "#6558f5" }}> Faça login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Pressable>

                </ScrollView>
            </View>
        );
    }
}