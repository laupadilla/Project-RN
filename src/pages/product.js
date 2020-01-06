import React from 'react';
import { WebView } from 'react-native-webview';

const Product = ({ navigation }) => {
    console.log(navigation);
    return (        
        <WebView source = {{ uri: 'https://www.facebook.com/events/' }} />
    );
}

Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title,
});

export default Product;