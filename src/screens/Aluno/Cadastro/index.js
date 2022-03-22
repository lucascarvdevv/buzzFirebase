import React from "react";
import { Container } from './style';
import { View, TextInput, TouchableOpacity, Text,  Keyboard, Pressable, Alert, ScrollView, Label, Input,  KeyboardAvoidingView, } from "react-native";
import Onibus from '../../../img/Onibus.svg';
import { CheckBox } from "react-native-elements";
import { useState } from "react";

export default function Cadastro({navigation}) {

    const clicouLogin = () => {
        navigation.navigate("Login")
    }

    const [segunda, setSegunda] = useState(false);
    const [terca, setTerca] = useState(false);
    const [quarta, setQuarta] = useState(false);
    const [quinta, setQuinta] = useState(false);
    const [sexta, setSexta] = useState(false);

    const hobbies = []

    const clicou = () =>{
        if(segunda === true){
            hobbies.push('segunda')
        }
        if(terca === true){
            hobbies.push('terca')
        }
        if(quarta === true){
            hobbies.push('quarta')
        }
        if(quinta === true){
            hobbies.push('quinta')
        }
        if(sexta === true){
            hobbies.push('sexta')
        }

        Alert.alert("Cadastro", "Foi realizado com sucesso!");
    }

    return (
        <View style={Container.MainContainer}>
            <ScrollView>
            <Pressable onPress={Keyboard.dismiss}>
            <View style={Container.InputArea}>              
                <View style={Container.InputLogin}>

                    <Text style={Container.Texto}>Nome</Text>
                    <TextInput style={Container.input} />

                    <Text style={Container.Texto}>Email</Text>
                    <TextInput style={Container.input} />

                    <Text style={Container.Texto}>Senha</Text>
                    <TextInput style={Container.input}  secureTextEntry={true}/>

                    <Text style={Container.Texto}>Confirmar senha</Text>
                    <TextInput style={Container.input}  secureTextEntry={true}/>

                    <Text style={Container.Texto}>Faculdade</Text>
                    <TextInput style={Container.input} />

                    <Text style={Container.Texto}>Curso</Text>
                    <TextInput style={Container.input} />

                    <Text style={Container.Texto}>Período</Text>
                    <TextInput style={Container.input} />

                    <Text style={[Container.Texto, {marginBottom: 15}]}>Dias de Uso:</Text>
                   
                    <CheckBox title="Segunda-feira" checked={segunda} onPress={() => setSegunda(!segunda)} /> 
                    <CheckBox title="Terça-feira" checked={terca} onPress={() => setTerca(!terca)} /> 
                    <CheckBox title="Quarta-feira" checked={quarta} onPress={() => setQuarta(!quarta)} /> 
                    <CheckBox title="Quinta-feira" checked={quinta} onPress={() => setQuinta(!quinta)} /> 
                    <CheckBox title="Sexta-feira" checked={sexta} onPress={() => setSexta(!sexta)} /> 

                    <TouchableOpacity style={Container.botao} onPress={ () => {clicou()}}>
                        <Text style={Container.botaoText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Container.textoCadastro} onPress={() => {clicouLogin()}}>
                        <Text style={{color: "#6558f5"}}>Já possui uma conta?</Text>
                        <Text style={{fontWeight: "bold", color: "#6558f5"}}> Faça login</Text>
                    </TouchableOpacity>                
                </View>           
            </View>

            </Pressable>
            {/*<View style={Container.LogoBuzz}>
                <Onibus width="15%" height="45" />
                <Text style={Container.TextoLogo}>BUZZ</Text>
    </View>*/}
    </ScrollView>
        </View>
    );
}