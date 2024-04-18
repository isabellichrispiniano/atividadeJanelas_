import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import Google from 'react-native-vector-icons/AntDesign';
import Facebook from 'react-native-vector-icons/Entypo';
import Senha from 'react-native-vector-icons/EvilIcons';



export default props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <View style={styleInicial.iconTop}>
                <Image style={styleInicial.imgIni} source={require('./img/login.png')} />
            </View>
            <Text style={styleInicial.login}>Login</Text>

            <View style={styleInicial.input2}>
                <Icon name='email' size={15} color='#3D3B40' />
                <TextInput
                    style={styleInicial.input}
                    placeholder="Email"
                    color={`#86673f`}
                    placeholderTextColor={`#C7C8CC`}

                />
            </View>

            <View style={styleInicial.input2}>
                <Senha name='lock' size={25} color='#3D3B40' />
                <TextInput
                    style={styleInicial.input}
                    placeholder="Senha"
                    color={`#C7C8CC`}
                    placeholderTextColor={`#C7C8CC`}
                />
            </View>

            <TouchableOpacity style={styleInicial.btn}>
                <View>
                    <Text style={styleInicial.txtBnt}>Login!</Text>
                </View>
            </TouchableOpacity>

            <Text>Ou login com...</Text>

            <View style={styleInicial.botoes}>
                <TouchableOpacity style={styleInicial.Botao}>
                    <Google name='google' size={20} color='#E72929' />
                </TouchableOpacity>

                <TouchableOpacity style={styleInicial.Botao}>
                    <Facebook name='facebook-with-circle' size={20} color='#0E46A3' />
                </TouchableOpacity>

                <TouchableOpacity style={styleInicial.Botao}>
                    <Facebook name='twitter-with-circle' size={20} color='#7BC9FF' />
                </TouchableOpacity>
            </View>


            <TouchableOpacity onPress={() => props.navigation.navigate('Registrar')}>
                <Text>Novo no app?<Text style={styleInicial.textoR}> Registrar!</Text></Text>
            </TouchableOpacity>
        </View>

    )
}

const styleInicial = StyleSheet.create(
    {
        imgIni: {
            height: 200,
            width: 200,
        },
        iconTop: {
            flexDirection: 'row',
            marginBottom: 25,
        },
        input: {
            paddingRight: '75%',
            paddingBottom: 10,
            paddingLeft: 0,
            marginLeft: 10,
        },
        login: {
            fontSize: 30,
            color: 'black'
        },
        btn: {
            backgroundColor: '#a97bff',
            padding: 10,
            borderRadius: 50,
            paddingLeft: 130,
            paddingRight: 130,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 25,
        },
        txtBnt: {
            color: 'white'
        },
        input2: {
            alignItems: 'center',
            flexDirection: `row`,
            borderBottomColor: '#EEEEEE',
            borderBottomWidth: 1,
            marginBottom: 10

        },
        Botao: {
            backgroundColor: "#F5F7F8",
            padding: 10,
            borderRadius: 10,
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5
        },
        botoes: {
            flexDirection: 'row',
            padding: 15
        },
        textoR: {
            color: '#a97bff'
        }

    }
)