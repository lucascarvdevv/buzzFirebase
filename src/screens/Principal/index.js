import React, { Component, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text,  Keyboard, Pressable, Image} from 'react-native';
import { Container } from './style';

import Onibus from '../../img/Onibus.svg';
import { useNavigation  } from "@react-navigation/native";
/*import { Input, Text } from 'react-native-elements';*/

import ImagePicker from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/Entypo';
import Icone from 'react-native-vector-icons/Entypo';
import { Button } from 'react-native-elements';

export default function Principal({navigation}){

/*function imagePickerCallback(data){
  console.log(data)
}*/


    return(
        <View style={Container.container}>
          <View style={Container.header}>
          {/*<Icone style={{ left: 15}} name="switch" size={45} color='#6558f5'/>
          <Icon style={{top: -45, left: 340}} name="menu" size={45} color='#6558f5'/>*/}
            <View style={Container.headerContent}>
                <Image style={Container.avatar}
                  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU'}}/>
                  <TouchableOpacity 
                  /*onPress={() => ImagePicker.launchImageLibrary({},imagePickerCallback)}*/>
                  <Text style={{fontSize: 13,paddingHorizontal: 4, borderWidth: 1, borderRadius: 5, textAlign: "center", bottom: 5}}>Selecionar foto</Text></TouchableOpacity>

                <Text style={Container.name}>Matheus Silva </Text>
                <Text style={Container.userInfo}>matheus.morsc@gmail.com</Text>
                <Text style={Container.userInfo}>Pedralva </Text>
            </View>

            <Text style={{color: "#6558f5", textAlign: 'center', bottom: 50, fontSize: 15}}>Centro Universitário de Itajubá - FEPI </Text>
          </View>

          <View style={Container.body}>
            <View style={Container.item}>
              <View style={Container.iconContent}>
              <Text style={Container.infoUm}>Faculdade:</Text>
              </View>
              <View style={Container.infoContent}>
                <Text style={Container.infoDois}>Fepi</Text>
              </View>
            </View>

            <View style={Container.item}>
              <View style={Container.iconContent}>
              <Text style={Container.infoUm}>Curso:</Text>
              </View>
              <View style={Container.infoContent}>
                <Text style={Container.infoDois}>Sistemas de Informação</Text>
              </View>
            </View>

            <View style={Container.item}>
              <View style={Container.iconContent}>
              <Text style={Container.infoUm}>Período:</Text>
              </View>
              <View style={Container.infoContent}>
                <Text style={Container.infoDois}>5º período</Text>
              </View>
            </View>

            <View style={Container.item}>
              <View style={Container.iconContent}>
              <Text style={Container.infoUm}>Dias de uso: </Text>
              </View>
              <View style={Container.infoContent}>
                <Text style={Container.infoDois}>De terça a quinta</Text>
              </View>
            </View>
          </View>
          <View style={Container.ContainerMain}>
                <Onibus width="15%" height="45" />
                <Text style={Container.TextoLogo}>BUZZ</Text>
            </View>
      </View>    
    );
}


