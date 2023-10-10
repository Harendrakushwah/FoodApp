import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import SignupScreen from '../Screens/SignupScreen';
import SignInScreen from '../Screens/SignInScreen';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
        <Stack.Navigator initialRouteName='welcomePage'>
            <Stack.Screen name="welcomePage" component={WelcomeScreen} 
                options={{headerShown: false}}/>
            <Stack.Screen name="signup" component={SignupScreen} 
                options={{headerShown: false}}/>
            <Stack.Screen name="signin" component={SignInScreen} 
                options={{headerShown: false}}/>
            <Stack.Screen name="home" component={HomeScreen} 
                options={{headerShown: false}}/>
        </Stack.Navigator> 
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})