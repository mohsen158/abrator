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
    AppRegistry,TextInput,ToastAndroid,
    StyleSheet, Button,
    Text,
    View
} from 'react-native';

export default class abrator extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Send',
    });

    constructor(props) {
        super(props);

        this.state = {
            torchMode: 'off',
            cameraType: 'back',
            amount:0
        };
    }

    barcodeReceived(e) {
        this.setState({'address':e.data})
        console.warn('Barcode: ' + e.data);
        console.warn('Type: ' + e.type);
    }

    render() {
        return (

            <View style={styles.container}>
                <View >
                   <Text>{'Address'}</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(address) => this.setState({address})}
                        value={this.state.address}

                    />
                </View>
                <BarcodeScanner
                    onBarCodeRead={this.barcodeReceived.bind(this)}
                    style={{ flex: 1}}
                    torchMode={this.state.torchMode}
                    cameraType={this.state.cameraType}
                />
                <View >
                   <Text>Amount</Text>
                    <TextInput

                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(amount) => this.setState({amount})}
                        value={this.state.amount}

                    />
                    <Button  onPress={()=>{
                        ToastAndroid.show('Send', ToastAndroid.SHORT)

                    }} title={'Send'}></Button>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    statusBarText: {
        fontSize: 20,
    },
});
