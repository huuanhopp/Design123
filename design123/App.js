/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import Home from './Components/Home';
import Home1 from './Components/Home1';
import Home2 from './Components/Home2';
import Home3 from './Components/Home3';
import Home4 from './Components/Home4';
import Home5 from './Components/Home5';
const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: () => <FontAweSome name="home" size={24} />,
            }}
          />
          <Tab.Screen
            name="Home1"
            component={Home1}
            options={{
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: () => <FontAweSome name="television" size={24} />,
            }}
            
          />
           <Tab.Screen
            name="Home2"
            component={Home2}
            options={{
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: () => <FontAweSome name="user-circle" size={24} />,
            }}
            
          />
           <Tab.Screen
            name="Home3"
            component={Home3}
            options={{
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: () => <FontAweSome name="heart-o" size={24} />,
            }}
            
          />
          <Tab.Screen
            name="Home4"
            component={Home4}
            options={{
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: () => <FontAweSome name="bell-o" size={24} />,
            }}
            
          />
          <Tab.Screen
            name="Home5"
            component={Home5}
            options={{
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: () => <FontAweSome name="navicon" size={24} />,
            }}
            
          />
          
          {/* <Tab.Screen options={{
               tabBarIcon: () => <FontAweSome name = 'home' size = {24}/>
            }} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
