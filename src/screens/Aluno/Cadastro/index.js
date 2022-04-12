import React from "react";
import { Container } from './style';
import { View, TextInput, TouchableOpacity, Text, Keyboard, Pressable, Alert, ScrollView, Label, KeyboardAvoidingView, } from "react-native";
import Onibus from '../../../img/Onibus.svg';
import { CheckBox, Input } from "react-native-elements";
import { useState, useEffect } from "react";
import { db } from "../../../config/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



const showDialog = () => setVisible(true);
const hideDialog = () => setVisible(false);

export default function Cadastro({navigation}) {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

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

    const createUser = async () => {
        await addDoc(usersCollectionRef, { nome: nome, email: email, curso: curso, faculdade: faculdade, periodo: Number(periodo)  });
      }
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

        if (nome == null || nome == '' ) {
            setErrorNome("Preencha com seu nome")
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

        if (faculdade == '' || periodo == null ) {
            setErrorFaculdade("Preencha com o nome da faculdade")
        }
        if (curso == null || curso == '' ) {
            setErrorCurso("Preencha com o nome do curso")
        }
        if (periodo == null || periodo == '') {
            setErrorPeriodo("Preencha com o período atual")
        }
        return !error
    }


    


    const hobbies = []

    const clicou = () => {
        if (segunda === true) {
            hobbies.push('segunda')
        }
        if (terca === true) {
            hobbies.push('terca')
        }
        if (quarta === true) {
            hobbies.push('quarta')
        }
        if (quinta === true) {
            hobbies.push('quinta')
        }
        if (sexta === true) {
            hobbies.push('sexta')
        }

        Alert.alert("Cadastro", "Foi realizado com sucesso!");
    }

    {



        return (
            <View style={Container.MainContainer}>
                <ScrollView>
                    <Pressable onPress={Keyboard.dismiss}>
                        <View style={Container.InputArea}>
                            <View style={Container.InputLogin}>

                                <Text style={Container.Texto}>Nome</Text>
                                <Input style={Container.TextInput}

                                    onChangeText={value => {
                                        setErrorNome(null)
                                        setNome(value)

                                    }}
                                    errorMessage={errorNome}
                                />

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

                                <Text style={Container.Texto}>Faculdade</Text>
                                <Input style={Container.TextInput}
                                    onChangeText={value => {
                                        setErrorFaculdade(null)
                                        setFaculdade(value)
                                    }}
                                    errorMessage={errorFaculdade}
                                />

                                <Text style={Container.Texto}>Curso</Text>
                                <Input style={Container.TextInput}
                                    onChangeText={value => {
                                        setErrorCurso(null)
                                        setCurso(value)
                                    }}
                                    errorMessage={errorCurso}
                                />

                                <Text style={Container.Texto}>Período</Text>
                                <Input style={Container.TextInput}
                                    keyboardType="numeric"
                                    onChangeText={value => {
                                        setErrorPeriodo(null)
                                        setPeriodo(value)
                                    }}
                                    errorMessage={errorPeriodo}
                                />

                                <Text style={[Container.Texto, { marginBottom: 15 }]}>Dias de Uso:</Text>
                                <View style={[Container.check]}>
                                    <ScrollView horizontal={true}>
                                        <CheckBox title="Segunda-feira" checked={segunda} onPress={() => setSegunda(!segunda)} />
                                        <CheckBox title="Terça-feira" checked={terca} onPress={() => setTerca(!terca)} />
                                        <CheckBox title="Quarta-feira" checked={quarta} onPress={() => setQuarta(!quarta)} />
                                        <CheckBox title="Quinta-feira" checked={quinta} onPress={() => setQuinta(!quinta)} />
                                        <CheckBox title="Sexta-feira" checked={sexta} onPress={() => setSexta(!sexta)} />
                                    </ScrollView>
                                </View>

                                <TouchableOpacity style={Container.botao} onPress={createUser}>
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