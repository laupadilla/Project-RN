import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import Main from './pages/main';
import Login from './pages/login';
import EventListScreen from './pages/eventList';
import Register from './pages/register';
// import Product from './pages/product';

const RootStack = createStackNavigator({ 
    Main,
    Login,
    Register,
    EventList: EventListScreen,
 },
 {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
        headerStyle: { 
            backgroundColor: '#d62b2c'
        },
            headerTintColor: '#FFF'
        }
 });

const AppContainer = createAppContainer(RootStack);

export default AppContainer;