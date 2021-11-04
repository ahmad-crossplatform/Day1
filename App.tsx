import React,{useState} from 'react';
import { DemoContextProvider } from './src/context/DemoContext';
import { LoginScreen } from './src/Screens/MainScreen/LoginScreen';

 const  App= () =>  
 <DemoContextProvider>
      <LoginScreen/>
 </DemoContextProvider>
export default App