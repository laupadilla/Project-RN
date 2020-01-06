import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';

export default class Login extends Component {
    // static navigationOptions = {
    //     title: 'Login'
    // };

    state = {};

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite aqui o seu email"
                    // onChangeText={(text) => this.setState({text})}
                    // value={this.state.text}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite aqui a sua senha"
                    // onChangeText={(text) => this.setState({text})}
                    // value={this.state.text}
                />
                <TouchableOpacity 
                    style={styles.productButton} 
                    // onPress={() => {
                    //     this.props.navigation.navigate('Product', { product: item })
                    // }}
                    >
                    <Text style={styles.productButtonText}>Acessar</Text>
                </TouchableOpacity>
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
        height: 40,
        width: 250,
        marginBottom: 15,
        borderColor: "#d62b2c",
        borderRadius: 5,
        borderWidth: 1
    },
    productButton: {
        height: 42,
        width: 250,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#d62b2c',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    productButtonText: {
        fontSize: 16,
        color: '#d62b2c',
        fontWeight: 'bold'
    }
});