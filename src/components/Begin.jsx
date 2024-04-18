import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default props => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: "white"
        }}>

            <Text style={Inicial.title}>GAMEON!</Text>

            <Image style={Inicial.imagem} source={require('./img/begin.png')} />

            <TouchableOpacity style={Inicial.btn} onPress={() => props.navigation.navigate('Login')}>
                <Text style={Inicial.txtBotao}>Entrar agora!</Text>
                <Icon style={Inicial.icon} name='chevron-right' size={15} color='#fff' />
            </TouchableOpacity>

        </View>

    )
}

const Inicial = StyleSheet.create(
    {
        title: {
            fontSize: 30,
            color: '#000000',
            fontWeight: 'bold',
        },
        imagem: {
            height: 200,
            width: 350,
        },
        btn:{
            backgroundColor:'#a97bff',
            padding:10,
            borderRadius:50,
            paddingLeft: 130,
            paddingRight:130,
            alignItems: 'center',
            flexDirection:'row',
            justifyContent:'space-between',
            margin:25
        },
        txtBotao:{
            color:'#fff',
            fontWeight:'bold'
        },
        icon:{
            marginLeft:10
        }
    }
)