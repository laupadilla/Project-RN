import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';

const EventList = (props) => {
    //console.log(props.navigation.state.params);
    return (
        <View style={styles.container}>
            <Text style= {styles.text}>Bem vinda { props.navigation.state.params }</Text>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {

    },
    text: {

    }
});

EventList.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params,
});

export default EventList;