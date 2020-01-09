import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';

export default class Register extends Component {
    static navigationOptions = {
        title: 'Crie sua conta'
    };

    state = {
        name: '',
        email: '',
        password: ''
    };

    register = async () => {
        const response = await api.post(`/register`, {
            'name': this.state.name,
            'email': this.state.email,
            'password': this.state.password
        });

        console.log(response);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style= {styles.text}>Nome</Text>
                <TextInput
                        style={styles.textInput}
                        placeholder="Digite aqui o seu nome"
                        onChangeText = {(name) => this.setState({name})}
                        value={this.state.name}
                    />
                <Text style= {styles.text}>Email</Text>
                <TextInput
                        style={styles.textInput}
                        placeholder="Digite aqui o seu email"
                        onChangeText = {(email) => this.setState({email})}
                        value={this.state.email}
                    />
                <Text style= {styles.text}>Senha</Text>
                <TextInput
                        style={styles.textInput}
                        placeholder="Digite aqui a sua senha"
                        onChangeText = {(password) => this.setState({password})}
                        value={this.state.password}
                    />

                <TouchableOpacity 
                    style={styles.productButton} 
                    onPress={this.register}
                    >
                    <Text style={styles.productButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
        backgroundColor: '#ecf0f1',
    },
    text: {
        marginBottom: 5
    },
    textInput: { 
        height: 50,
        width: 250,
        marginBottom: 15,
        borderColor: "#d62b2c",
        borderRadius: 5,
        borderWidth: 1,
        padding: 15
    },
    productButton: {
        height: 42,
        width: 250,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#d62b2c',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    productButtonText: {
        fontSize: 16,
        color: '#d62b2c',
        fontWeight: 'bold'
    }
});

// FirstScreen.navigationOptions = ({ navigation }) => ({
//     title: navigation.state.params,
// });
