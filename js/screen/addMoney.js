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
    AppRegistry, TouchableOpacity,
    StyleSheet, Button,
    Text, Image,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class abrator extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Add money',
    });


    render() {
        return (
            <View style={{
        flex: 1,
        flexDirection: 'column',
         alignItems: 'center',

      }}>

                <TouchableOpacity style={{height:100}} onPress={this._onPressButton}>
                    <View style={{
    flex:1,
    flexDirection:'row'
    ,
backgroundColor:'#ffff',
width:300,
     alignItems: 'center',
     borderColor:'#aaaaaa',
     borderWidth:0.5,
     padding:5,
     margin:5
}}>
                        <Icon name="bank" color="#58aa53" size={50}/>
                        <View style={{
    flexDirection:'column',
    flex:1
}}>
                            <Text> Bank</Text>
                            <Text> Fund your wallet electronically</Text>


                        </View>
                    </View>
                </TouchableOpacity>




                <TouchableOpacity style={{height:100}} onPress={()=>{
                    this.props.navigation.navigate('tellermap')
                }}>
                    <View style={{
    flex:1,
    flexDirection:'row'
    ,
backgroundColor:'#ffff',
width:300,
     alignItems: 'center',
     borderColor:'#aaaaaa',
     borderWidth:0.5,
     padding:5,
     margin:5
}}>
                        <Icon name="money"  color="#58aa53" size={50}/>
                        <View style={{
    flexDirection:'column',
    flex:1
}}>
                            <Text> Cash</Text>
                            <Text> Fund your wallet using a teller near you</Text>


                        </View>
                    </View>
                </TouchableOpacity>







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

