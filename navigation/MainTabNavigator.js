import React from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DetailNews from "../screens/DetailNews";
import SettingsScreen from "../screens/SetttingsScreen";
import { createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';

const HomeStackNavigator = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        DetailNews: { screen: DetailNews }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
);

const tabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ tintColor }) => (
                <Icon color={tintColor} size={25} name={'ios-home'} />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Paramètres',
            tabBarIcon: ({ tintColor }) => (
                <Icon color={tintColor} size={25} name={'ios-settings'} />
            ),
            barStyle: { backgroundColor: 'red' }
        }
    }
},
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(tabNavigator);
