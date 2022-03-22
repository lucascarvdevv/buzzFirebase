import React, { Component } from 'react';
import {StyleSheet,Text, View,TouchableOpacity,Image, Alert,ScrollView,FlatList, } from 'react-native';


import Icon from 'react-native-vector-icons/Entypo';
import { styles } from './style';


export default class ListaUsuarios extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, name: "Mark Doe",   position:"Estudante",  image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
        {id:1, name: "John Doe",   position:"Estudante",  image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
        {id:2, name: "Clark Man",  position:"Estudante",  image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3, name: "Jaden Boor", position:"Estudante",  image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4, name: "Srick Tree", position:"Estudante",  image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:5, name: "John Doe",   position:"Estudante",  image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
        {id:6, name: "John Doe",   position:"Estudante",  image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8, name: "John Doe",   position:"Estudante",  image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9, name: "John Doe",   position:"Estudante",  image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:9, name: "John Doe",   position:"Estudante",  image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.name, item.position)
    
  }

  render() {
    return (
      <View style={styles.container}>
          
        <TouchableOpacity hitSlop={{top: -25, bottom: -10, left: -15, right: -345}} onPress={() => this.props.navigation.openDrawer()}>
                <Icon style={{marginTop: 20, left: 10, width: 50}} name="menu" size={45} color='#6558f5' />    
        </TouchableOpacity>
        
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <View style={styles.cardHeader}>
                  
                </View>
                <Image style={styles.userImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.position}</Text>
                    <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                      <Text style={styles.followButtonText}>Ver perfil</Text>  
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
        
      </View>
    );
  }
}


/*import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Container } from './style';

import Onibus from '../../img/Onibus.svg';

import Icon from 'react-native-vector-icons/Entypo';


export default function ListaUsuarios({navigation}){

/*function imagePickerCallback(data){
  console.log(data)
}*/

/*const [inputText, setInputText] = useState('');

    return(
        <View style={Container.main}>    
        <ScrollView>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon style={{marginTop: 45, left: 10, width: 50}} name="menu" size={45} color='#fff'/>
        </TouchableOpacity>
            <View style={Container.blocosEsquerdo}>
                <View style={Container.headerContent}>
                    <Image style={Container.avatar}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU'}}/>
                    <Text style={Container.name}>Matheus Silva</Text>
                    <Text style={Container.userInfo}>Estudante</Text>
                </View>          
            </View>
            <View style={Container.blocosEsquerdo}>
                <View style={Container.headerContent}>
                    <Image style={Container.avatar}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU'}}/>
                    <Text style={Container.name}>Matheus Silva</Text>
                    <Text style={Container.userInfo}>Estudante</Text>
                </View>          
            </View>
            <View style={Container.blocosEsquerdo}>
                <View style={Container.headerContent}>
                    <Image style={Container.avatar}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU'}}/>
                    <Text style={Container.name}>Matheus Silva</Text>
                    <Text style={Container.userInfo}>Estudante</Text>
                </View>          
            </View>
            <View style={Container.blocosDireito}>
                <View style={Container.headerContent}>
                    <Image style={Container.avatar}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU'}}/>
                    <Text style={Container.name}>Matheus Silva</Text>
                    <Text style={Container.userInfo}>Estudante</Text>
                </View>          
            </View>
            <View style={Container.blocosDireito}>
                <View style={Container.headerContent}>
                    <Image style={Container.avatar}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU'}}/>
                    <Text style={Container.name}>Matheus Silva</Text>
                    <Text style={Container.userInfo}>Estudante</Text>
                </View>          
            </View>
            <View style={Container.blocosDireito}>
                <View style={Container.headerContent}>
                    <Image style={Container.avatar}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU'}}/>
                    <Text style={Container.name}>Matheus Silva</Text>
                    <Text style={Container.userInfo}>Estudante</Text>
                </View>          
            </View>

          <View style={Container.header}>
         

            <View style={Container.headerContent}>
                <Image style={Container.avatar}
                  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU'}}/>
                <Text style={Container.name}>Matheus Silva </Text>
                <Text style={Container.userInfo}>matheus.morsc@gmail.com</Text>
                <Text style={Container.userInfo}>Pedralva </Text>
            </View>          
            {/*<Text style={{color: "#6558f5", textAlign: 'center', bottom: 50, fontSize: 15}}>Centro Universitário de Itajubá - FEPI </Text>
                </View>

        

            <View style={Container.LogoBuzz}>
                <Onibus width="15%" height="45" />
                <Text style={Container.TextoLogo}>BUZZ</Text>
            </View>
           </ScrollView>
          
      </View>    
    );
}
*/




