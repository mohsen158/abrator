/**
 * Created by mohsen on 9/23/2017.
 */
/**
 * Created by mohsen on 9/23/2017.
 */
/**
 * Created by mohsen on 9/20/2017.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import BarcodeScanner from 'react-native-barcodescanner';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet, Button,
    Text,Image,
    View
} from 'react-native';

export default class abrator extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Receive',
    });


    render() {
        return (
            <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>

                <Image style={{height:100,width:100}} source={require('../../img/acou.png')}></Image>
                <Text> Arash Sr</Text>
                <Text> 09198040751</Text>

               <Image style={{height:100,width:100}} source={require('../../img/qr.png')}></Image>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

