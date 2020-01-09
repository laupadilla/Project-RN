import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';

export default class Login extends Component {
    static navigationOptions = {
        title: 'App'
    };

    state = {
        email: '',
        password: ''
    };

    sigin = async () => {
        const response = await api.post(`/authenticate`, {
            'email': this.state.email,
            'password': this.state.password
        });

        console.log(response);

        if(response.data.user.email === this.state.email)
            this.props.navigation.navigate('EventList', response.data.user.name);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite aqui o seu email"
                    onChangeText = {(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite aqui a sua senha"
                    onChangeText = {(password) => this.setState({password})}
                    value={this.state.password}
                    secureTextEntry={ true }
                />
                <TouchableOpacity 
                    style={styles.productButton} 
                    onPress={this.sigin}
                    >
                    <Text style={styles.productButtonText}>Acessar</Text>
                </TouchableOpacity>

                <Text style= { {marginTop: 20} }>Não possui conta?</Text>
                <Text 
                    style= { {marginTop: 2, fontWeight: 'bold', color: '#d62b2c'} }
                    onPress = {() => this.props.navigation.navigate('Register')}
                    >Criar</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        backgroundColor: '#ecf0f1',
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