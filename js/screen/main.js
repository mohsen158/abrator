/**
 * Created by mohsen on 9/20/2017.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet, Button,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myButton = (
    <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
        Login with Facebook
    </Icon.Button>
);
export default class abrator extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'AbraTor',
    });

    clickme() {
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <View style={{


        justifyContent: 'center',
        alignItems: 'center',
      }}>
                <View style={{
                    flex:1,
                    alignItems: 'center',
                }}>
                    <Text style={styles.txt}>MY Rial BALANCE</Text>
                    <Text> RR 0.00</Text>
                    <Text> Token: 0.00 (NuBits) </Text>
                </View>
                <View style={{
marginTop:100,
height:200,
        justifyContent: 'space-between',

      }}  >

                    <Icon.Button name="plus"  onPress={()=>{this.props.navigation.navigate('addmoney')}}>Add money</Icon.Button >
                    <Icon.Button name="send"  onPress={()=>{this.props.navigation.navigate('send')}}
                          >SEND</Icon.Button>
                    <Icon.Button name="get-pocket" onPress={()=>{this.props.navigation.navigate('receive')}}
                           >RECEIVE</Icon.Button>
                    <Icon.Button name="dollar" onPress={()=>{this.props.navigation.navigate('withdrawstack')}}
                           >WITHDRAW</Icon.Button>

                </View></View>
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
    bt: {
        marginTop: 30
    },
    txt:{
      fontSize:26,
        fontWeight:'bold'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

