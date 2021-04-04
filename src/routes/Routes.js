import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// my screens
import Update from './../components/update/UpdateScreen';
import Create from './../components/create/CreateScreen';
import Main from './../components/Main/Main';
import HomeScreen from '../components/home/HomeScreen';


const navOptionHandler = () => ({
    headerShown: false
})

const headerConfig = {
    headerStyle: {
        backgroundColor: 'red',
        // height: 40 
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
}

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" component={HomeScreen} options={navOptionHandler} />
                <Stack.Screen name="update" component={Update} options={navOptionHandler} />
                <Stack.Screen name="create" component={Create} options={navOptionHandler} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({})
