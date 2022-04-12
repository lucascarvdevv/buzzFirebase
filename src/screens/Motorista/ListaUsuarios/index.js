/*import React from 'react';
import { View,  TouchableOpacity, Text, Image, TextInput, ScrollView} from 'react-native';
import { Container , styles} from './style';
import { collection, getDocs } from "firebase/firestore";


export default function ListaUsuarios (){

    const querySnapshot = await getDocs(collection(database, "Perfil"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

    return(
            <View style={styles.container}> 
            
                <Text> TESTE </Text>
            
            </View>
    )
}*/