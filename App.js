import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Button, StatusBar, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableRipple, Switch, Drawer } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Preload from './src/screens/Preload';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Cartao from './src/screens/Cartao';
import Perfil from './src/screens/Perfil';
import Scanner from './src/screens/Scanner';

const Stack = createStackNavigator();

const Draweer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}  >
      <Drawer.Section style={{flex: 1, marginTop: 15, }}>
        <DrawerItemList {...props} />
          <DrawerItem
            label="Ônibus"
            onPress={() => {}}
          />
          <DrawerItem
            label="Alterar dados"
            onPress={() => {}}
          />
      </Drawer.Section>

      <Drawer.Section title='Preferences' style={{borderTopColor: '#f4f4f4', borderTopWidth: 1}}>
          <TouchableRipple>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, paddingHorizontal: 16}}>
              <Text style={{marginTop: 15,}}>Dark Mode</Text>
              <Switch />
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>

      <Drawer.Section style={{marginBottom: 15, borderTopColor: '#f4f4f4', borderTopWidth: 1}}>   
        <DrawerItem        
            label="Sair"
            icon={() => (
              <Icon name="exit-to-app" size={35} color='#6558f5'/>
            )}
            onPress={() => {
            props.navigation.navigate('Login');
            }}
          />
      </Drawer.Section>  
      </View>
  );
}

function DrawerRoutes() {
  return (      
      <Draweer.Navigator 
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
      
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="Perfil" >

        <Draweer.Screen name='Perfil ' component={Perfil} />
        <Draweer.Screen name='Cartão Virtual'  component={Cartao} /> 
        <Draweer.Screen name='Scanner' component={Scanner} /> 
      </Draweer.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}
    >
      
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="Scanner" component={Scanner}/>
      <Stack.Screen name="Cartao" component={DrawerRoutes}/>
      <Stack.Screen name="Perfil" component={DrawerRoutes}/>
      
    </Stack.Navigator>
    </NavigationContainer>   
  );
}

export default App;

/*
import React from "react";
import { StyleSheet,Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import MyStack from "./src/stack/MainStack";


export default function App() {
 return(
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>

 );
}
*/

