import React from 'react';
import { View,  TouchableOpacity, Text, Image, TextInput, ScrollView} from 'react-native';
import { Container } from './style';

import Onibus from '../../../img/Onibus.svg';
import Icon from 'react-native-vector-icons/Entypo';

import ImagePicker from 'react-native-image-picker';

import { log } from 'react-native-reanimated';

export default function Perfil({navigation}){

/*function imagePickerCallback(data){
  console.log(data)
}*/

    return(
        <View style={Container.container}>
     
          <ScrollView>
          <View style={Container.header}>
          
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={Container.touchMenu}>
            <Icon style={{top: 5, left: 10, width: 50,}} name="menu" size={45} color='#fff'/>
          </TouchableOpacity>

            <View style={Container.headerContent}>
                <Image style={Container.avatar}
                  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU'}}/>
                  <TouchableOpacity 
                  /*onPress={() => ImagePicker.launchImageLibrary({},imagePickerCallback)}*/>
                  {/*<Text style={{fontSize: 12,paddingHorizontal: 3, borderWidth: 1, borderRadius: 5, textAlign:"center", top: 20, marginBottom: 21}}>Selecionar foto</Text>*/}
                  </TouchableOpacity>

                  <Text style={Container.name}>Matheus Silva </Text>
                  <Text style={Container.userInfo}>matheus.morsc@gmail.com</Text>
                  <Text style={Container.userInfo}>Pedralva </Text>
            </View>
            {/*<Text style={{color: "#6558f5", textAlign: 'center', bottom: 50, fontSize: 15}}>Centro Universitário de Itajubá - FEPI </Text>*/}
          </View>
            <View style={Container.info}>
              <Text style={Container.Texto}>Faculdade:<TextInput style={Container.Input}>FEPI</TextInput></Text>
              
              <Text style={Container.Texto}>Curso:<TextInput style={Container.Input}>Sistemas de Informação</TextInput></Text>
              <Text style={Container.Texto}>Período:<TextInput style={Container.Input}>5º Período</TextInput></Text>
              <Text style={Container.Texto}>Dias de uso:<TextInput style={Container.Input}>Ter/Qua/Qui</TextInput></Text>
            </View>
            
        </ScrollView>
        <View style={Container.LogoBuzz}>
                    <Onibus width="15%" height="45" />
                    <Text style={Container.TextoLogo}>BUZZ</Text>
             </View>
      </View>    
    );
}


