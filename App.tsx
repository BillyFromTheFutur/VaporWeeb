import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import React, { Component, Fragment, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppBar, Button } from 'react95-native'
import * as Font from "expo-font";
import useFonts from './hooks/useFonts';
import AppLoading from 'expo-app-loading';
import MyTabBar from './components/MyTabBar';
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        onPress={() => navigation.navigate('Settings')}
      >Title</Button>
    </View>
  );
}

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

//@ts-ignore

const Tab = createBottomTabNavigator();
const App = () => {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }
  NavigationBar.setBackgroundColorAsync("#018281");
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#018281" barStyle="dark-content" />

      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={({ navigation }) => <MyTabBar navigation={navigation} />} sceneContainerStyle={{ flex: 1, justifyContent: 'space-around', width: '100%', backgroundColor: 'red' }} detachInactiveScreens>
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#018281',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});
