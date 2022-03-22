import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Container } from './style';

import Onibus from '../../../img/Onibus.svg';

import Icon from 'react-native-vector-icons/Entypo';

import QRCode from 'react-native-qrcode-svg';

export default function Cartao({navigation}){

/*function imagePickerCallback(data){
  console.log(data)
}*/

/*const [inputText, setInputText] = useState('');*/
const [qrValue, setQrValue] = useState('');

    return(
        <View style={Container.container}>
          <ScrollView>
          <View style={Container.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon style={{marginTop: 45, left: 10, width: 50}} name="menu" size={45} color='#fff'/>
          </TouchableOpacity>

            <View style={Container.headerContent}>
                <Image style={Container.avatar}
                  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU'}}/>
                <Text style={Container.name}>Matheus Silva </Text>
                <Text style={Container.userInfo}>matheus.morsc@gmail.com</Text>
                <Text style={Container.userInfo}>Pedralva </Text>
            </View>          
            {/*<Text style={{color: "#6558f5", textAlign: 'center', bottom: 50, fontSize: 15}}>Centro Universitário de Itajubá - FEPI </Text>*/}
          </View>

          <View style={Container.body}>
              <SafeAreaView>
                  <View style={{top: 65}}>
                      <QRCode
                          value={qrValue ? qrValue : 'NA'}
                          size={250}
                          color="black"
                          />
                  </View>
              </SafeAreaView> 

            {/*<View style={Container.LogoBuzz}>
                <Onibus width="15%" height="45" />
                <Text style={Container.TextoLogo}>BUZZ</Text>
            </View>*/}
          </View>  
          </ScrollView>  
      </View>    
    );
}


