/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React, { Component, useEffect, useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  StyleSheet,
  View,
  Image,
  LogBox,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { Provider, useDispatch, useSelector } from 'react-redux';
// import configureStore from './store/configureStore';

//LIST COMPONENT CAMPUR
  
import Menu_Awal from './components/Menu_Awal';








export default function app() {
  const [isloading, setloading]=useState(true);
  useEffect (()=>{
    // setTimeout(() => {
    //   setloading(!isloading)
    // }, 3000);
    setloading(!isloading)
  },[])

  if(isloading) {
    return(
      <View style={{ flex: 1}}>
        <Text>Testing</Text>
      </View>
    );
  }
  else {
    const Stack=createNativeStackNavigator();
    return(
      <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            initialRouteName="Menu_Awal"
          >
            <Stack.Screen name="Menu_Awal"    component={Menu_Awal}/>

            
          </Stack.Navigator>
        </NavigationContainer>
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
    color: '#e1e5eb',
    marginBottom: 5,
  },
  gambar: {
    width: '100%',
    height: '100%',
  },
  gambar2: {
    width: '100%',
    height: '100%',
  },
});
