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
import MapView from 'react-native-maps';
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
const LATITUDE = 32.7220943;
const LONGITUDE = 51.53033000000005;
const LATITUDE_DELTA = 0.0922;
const SPACE = 0.01;
const a= {
    latitude: LATITUDE ,
    longitude: LONGITUDE ,
};
export default class MyApp extends  Component {



    render() {
        const { region } = this.props;
        console.log(region);

        return (
            <View style ={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
                >


                    <MapView.Marker
                        identifier="Marker1"
                        coordinate={a} />
                </MapView>
            </View>
        );
    }
}