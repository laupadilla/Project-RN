import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import Main from './pages/main';
import Login from './pages/login';
import Product from './pages/product';


const RootStack = createStackNavigator({ 
    Login,
    Product
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