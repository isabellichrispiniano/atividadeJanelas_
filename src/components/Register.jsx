import React from "react";
import { View, Button, Pressable, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Google from 'react-native-vector-icons/AntDesign';
import Facebook from 'react-native-vector-icons/Entypo';
import People from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Entypo';
import Senha from 'react-native-vector-icons/EvilIcons';
import Date from 'react-native-vector-icons/Feather'

export default props => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white'
        }}>
            <Image style={styleRegistar.img} source={require('./img/cadastro.png')} />

            <Text style={styleRegistar.txt1}>Registra-se</Text>

            <View style={styleRegistar.botoes}>
                <TouchableOpacity style={styleRegistar.Botao}>
                    <Google name='google' size={20} color='#E72929' />
                </TouchableOpacity>

                <TouchableOpacity style={styleRegistar.Botao}>
                    <Facebook name='facebook-with-circle' size={20} color='#0E46A3' />
                </TouchableOpacity>

                <TouchableOpacity style={styleRegistar.Botao}>
                    <Facebook name='twitter-with-circle' size={20} color='#7BC9FF' />
                </TouchableOpacity>
            </View>

            <Text>Registre-se seu email!</Text>

            <View style={styleRegistar.view}>
                <People name='user' size={20} color='#3D3B40' />
                <TextInput
                    style={styleRegistar.input}
                    placeholder="Nome"
                    placeholderTextColor={'#C7C8CC'}
                />
            </View>

            <View style={styleRegistar.view}>
                <Icon name='email' size={20} color='#3D3B40' />
                <TextInput
                    style={styleRegistar.input}
                    placeholder="Email"
                    placeholderTextColor={'#C7C8CC'}
                />
            </View>

            <View style={styleRegistar.view}>
                <Senha name='lock' size={25} color='#3D3B40' />
                <TextInput
                    style={styleRegistar.input}
                    placeholder="Senha"
                    placeholderTextColor={'#C7C8CC'}
                />
            </View>

            <View style={styleRegistar.view}>
                <Senha name='lock' size={25} color='#3D3B40' />
                <TextInput
                    style={styleRegistar.input2}
                    placeholder="Confirmar senha"
                    placeholderTextColor={'#C7C8CC'}
                />
            </View>

            <View style={styleRegistar.view}>
                <Date name='calendar' size={18} color='#3D3B40' />
                <TextInput
                    style={styleRegistar.input}
                    placeholder="Data"
                    placeholderTextColor={'#C7C8CC'}
                />
            </View>

        </View>
    )
}

const styleRegistar = StyleSheet.create(
    {
        img: {
            width: 240,
            height: 240
        },
        txt1: {
            fontSize: 30,
            color: 'black',

        },
        botoes: {
            flexDirection: 'row',
            padding: 15
        },
        Botao: {
            backgroundColor: "#F5F7F8",
            padding: 10,
            borderRadius: 10,
            paddingLeft: 35,
            paddingRight: 35,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5
        },
        view: {
            alignItems: 'center',
            flexDirection: 'row',
            borderBottomColor: '#EEEEEE',
            borderBottomWidth: 1,
            marginBottom: 10

        },
        input: {
            paddingRight: '75%',
            paddingBottom: 10,
            paddingLeft: 0,
            marginLeft: 10,
        },
        input2: {
            paddingRight: '60%',
            paddingBottom: 10,
            paddingLeft: 0,
            marginLeft: 10,
        }
    }
)

