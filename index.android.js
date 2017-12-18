// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
import {AppRegistry} from 'react-native'
import app from './js/app'
import {stack} from './js/config/routers'
import pin from './js/screen/pin/pin-code'
AppRegistry.registerComponent('abrator', () => stack  );


//
//
// import React, { Component } from 'react';
//
// import {
//     AppRegistry,
//     Text,
//     TouchableOpacity,
//     View,
//     StyleSheet,
//     Image,
//     Button,
//     TouchableNativeFeedback,
//     Platform,
// } from 'react-native';
//
// import { StackNavigator, TabNavigator, TabView } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';
//
// console.disableYellowBox = true;
//
// class HomeScreen extends Component {
//     static navigationOptions = {
//         tabBarLabel: 'Home',
//         title: 'Home 01',
//         tabBarIcon: ({ tintColor, focused }) => (
//             <View>
//                 <Icon name="home" size={24} color={tintColor} />
//             </View>
//         ),
//     };
//
//     render() {
//         return (
//             <Button
//                 onPress={() => this.props.navigation.navigate('HomeTwo', {name: 'Diego', age: 24,})}
//                 title="Go Home 02"
//             />
//         );
//     }
// }
//
// class HomeScreen2 extends Component {
//     static navigationOptions = {
//         tabBarLabel: 'Home',
//         title: 'Home 02',
//         tabBarIcon: ({ tintColor, focused }) => (
//             <View>
//                 <Icon name="home" size={24} color={tintColor} />
//             </View>
//         ),
//     };
//
//     render() {
//         const {state} = this.props.navigation;
//         return (
//             <View>
//                 <Text>{`Name: ${state.params.name}`}</Text>
//                 <Text>{`Age: ${state.params.age}`}</Text>
//                 <Button
//                     onPress={() => this.props.navigation.goBack()}
//                     title="Go Home 01"
//                 />
//             </View>
//         );
//     }
// }
//
// class NotificationsScreen extends Component {
//     static navigationOptions = {
//         tabBarLabel: 'Notifications',
//         title: 'Notifications 01',
//         tabBarIcon: ({ tintColor }) => (
//             <View>
//                 <Icon name="bell" size={24} color={tintColor} />
//             </View>
//         ),
//     };
//
//     render() {
//         return (
//             <Button
//                 onPress={() => this.props.navigation.navigate('NotificationsTwo')}
//                 title="Go Notifications 02"
//             />
//         );
//     }
// }
//
// class NotificationsScreen2 extends Component {
//     static navigationOptions = {
//         tabBarLabel: 'Notifications',
//         title: 'Notifications 02',
//         tabBarIcon: ({ tintColor }) => (
//             <View>
//                 <Icon name="bell" size={24} color={tintColor} />
//             </View>
//         ),
//     };
//
//     render() {
//         return (
//             <Button
//                 onPress={() => this.props.navigation.goBack()}
//                 title="Go Notifications 01"
//             />
//         );
//     }
// }
//
// class ProfileScreen extends Component {
//     static navigationOptions = {
//         tabBarLabel: 'Profile',
//         title: 'Profile 01',
//         tabBarIcon: ({ tintColor }) => (
//             <View>
//                 <Icon name="user" size={24} color={tintColor} />
//             </View>
//         ),
//     };
//
//     render() {
//         return (
//             <Button
//                 onPress={() => this.props.navigation.navigate('ProfileTwo')}
//                 title="Go Profile 02"
//             />
//         );
//     }
// }
//
// class ProfileScreen2 extends Component {
//     static navigationOptions = {
//         tabBarLabel: 'Profile',
//         title: 'Profile 02',
//         tabBarIcon: ({ tintColor }) => (
//             <View>
//                 <Icon name="user" size={24} color={tintColor} />
//             </View>
//         ),
//     };
//
//     render() {
//         return (
//             <Button
//                 onPress={() => this.props.navigation.goBack()}
//                 title="Profile 02"
//             />
//         );
//     }
// }
//
// export const Home = StackNavigator(
//     {
//         HomeOne: { screen: HomeScreen},
//         HomeTwo: { screen: HomeScreen2},
//     },
//     {
//         cardStyle: {
//             shadowOpacity: 0,
//             backgroundColor: '#fff',
//         }
//     }
// );
//
// export const Notifications = StackNavigator(
//     {
//         NotificationsOne: { screen: NotificationsScreen},
//         NotificationsTwo: { screen: NotificationsScreen2},
//     },
//     {
//         cardStyle: {
//             shadowOpacity: 0,
//             backgroundColor: '#fff',
//         }
//     }
// );
//
// export const Profile = StackNavigator(
//     {
//         ProfileOne: { screen: ProfileScreen},
//         ProfileTwo: { screen: ProfileScreen2},
//     },
//     {
//         cardStyle: {
//             shadowOpacity: 0,
//             backgroundColor: '#fff',
//         }
//     }
// );
//
// const SimpleApp = TabNavigator(
//     {
//         Home: {
//             screen: Home,
//         },
//         Notifications: {
//             screen: Notifications,
//         },
//         Profile: {
//             screen: Profile,
//         },
//     },
//     {
//         lazy: true,
//         animationEnabled: false,
//         swipeEnabled: true,
//         tabBarPosition: 'bottom',
//         tabBarOptions: {
//             showLabel: true,
//             activeTintColor: 'green',
//             inactiveTintColor: 'magenta',
//             style: {
//                 backgroundColor: '#fff',
//                 height: 48,
//                 ...Platform.select({
//                     ios: {
//                         shadowColor: '#000',
//                         shadowOffset: {
//                             width: 0,
//                             height: 4
//                         },
//                         shadowRadius: 4,
//                         shadowOpacity: 0.6
//                     },
//                     android: {
//                         elevation: 8,
//                         backgroundColor: '#fff',
//                     }
//                 }),
//             }
//         }
//     }
// );
//
// AppRegistry.registerComponent('abrator', () => SimpleApp);
//
//
//
//
//
// import React, { Component } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
//
//
// class PinBoxList extends Component {
//     static propTypes = {
//         pinValue: React.PropTypes.string,
//         pinLength: React.PropTypes.integer,
//     };
//
//     render() {
//         return (
//             <View
//                 style={{
//           flex: -1,
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//         }}>
//                 {this.renderPills()}
//             </View>
//         );
//     }
//
//     renderPills() {
//         let pills = [];
//
//         for (var i = 0; i < this.props.pinLength; i++) {
//             pills.push(this.renderPill(i + 1));
//         }
//
//         return pills;
//     }
//
//     renderPill(index) {
//         return (
//             <PinBox
//                 key={index}
//                 hasValue={this.props.pinValue && this.props.pinValue.length >= index}
//             />
//         );
//     }
// }
//
// class PinBox extends Component {
//     static propTypes = {
//         hasValue: React.PropTypes.boolean,
//     };
//
//     render() {
//         return (
//             <View
//                 style={{
//           borderBottomWidth: 3,
//           borderBottomColor: 'black',
//           height: 30,
//           width: 30,
//           marginRight: 14,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//                 {this.props.hasValue && <Text>•</Text>}
//             </View>
//         );
//     }
// }
//
// class PinKey extends Component {
//     static propTypes = {
//         label: React.PropTypes.string.isRequired,
//         label2: React.PropTypes.string,
//     };
//
//     constructor(props) {
//         super({label2: 'hi', ...props});
//     }
//
//     getDefaultProps() {
//         return {
//             label2: 'hi',
//         }
//     }
//
//     static defaultProps = {
//         label2: 'hi',
//     };
//
//     render() {
//         return (
//             <View style={[styles.pinKey, this.props.label.length == 0 && styles.pinKeyEmpty]}>
//                 <Text style={{fontSize: 26}}>{this.props.label}</Text>
//                 <Text style={{fontSize: 12}}>{this.props.label2}</Text>
//             </View>
//         );
//     }
// }
//
// class PinKeyboard extends Component {
//     render() {
//         return (
//             <View style={styles.pinKeyboard}>
//                 <PinKey label='1' />
//                 <PinKey label='2' label2='ABC' />
//                 <PinKey label='3' label2='DEF' />
//                 <PinKey label='4' label2='GHI' />
//                 <PinKey label='5' label2='JKL' />
//                 <PinKey label='6' label2='MNO' />
//                 <PinKey label='7' label2='PQRS' />
//                 <PinKey label='8' label2='TUV' />
//                 <PinKey label='9' label2='WXYZ' />
//                 <PinKey label='' />
//                 <PinKey label='0' />
//                 <PinKey label='' />
//             </View>
//         );
//     }
// }
//
// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.pinView}>
//                     <Text style={styles.pinPromptText}>Enter a passcode</Text>
//                     <PinBoxList pinLength={6} pinValue={'123'} />
//                 </View>
//                 <PinKeyboard></PinKeyboard>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     pinView: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//
//         backgroundColor: 'rgb(239, 239, 244)',
//     },
//     pinKeyboard: {
//         flex: -1,
//         flexShrink: 1,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//     },
//     pinKey: {
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         width: 130,
//         height: 70,
//         borderWidth: 1,
//         borderColor: 'rgb(239, 239, 244)',
//         flexGrow: 1,
//         paddingTop: 8
//     },
//     pinKeyEmpty: {
//         backgroundColor: 'rgb(239, 239, 244)',
//     },
//     pinPromptText: {
//         marginBottom: 10,
//     }
// });
// AppRegistry.registerComponent('abrator', () => App);