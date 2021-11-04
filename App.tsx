import React,{useState} from 'react';
import { DemoContextProvider } from './src/context/DemoContext';
import { LoginScreen } from './src/Screens/LoginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen} from './src/Screens/HomeScreen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator() ;  
const  App= () =>  
 <DemoContextProvider>
     <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen">
               <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
               <Stack.Screen name="HomeScreen" component={HomeScreen}/>
         </Stack.Navigator>
     </NavigationContainer>
 </DemoContextProvider>

export default App