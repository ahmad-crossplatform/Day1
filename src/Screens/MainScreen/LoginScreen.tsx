import React from 'react';
import {  View,  StyleSheet, ActivityIndicator, Text} from 'react-native';
import { Entry } from './components/Entry';
import { MyButton } from './components/MyButton';
import { useMainScreen } from './hooks/useMainScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'



export const LoginScreen: React.FC =  () => {
  
  const [password, setPassword] = React.useState("")
  const {isPasswordHidden, toggleShowPassword} = useMainScreen();
  const savePassword = async () => await AsyncStorage.setItem("password", password)
  const getPassword = async (): Promise<string|null> => await AsyncStorage.getItem("password")
  React.useEffect(() => {
    const init = async () => {
      const passwordFound = await getPassword() ; 
      if(passwordFound)
      {
        setPassword(passwordFound);
        console.log(password)
      }
    }
    init();
  }, [])
    return(
        <View style={styles.container}>

        <View style={styles.usernamePasswordContainer}>

        <Entry label="Username" isPassword={false}/>

        <Entry label="Password" defaultValue={password} isPassword={isPasswordHidden} OnTextChanged={(text)=> setPassword(text)}/>
        </View>
        <View style={styles.loginContainer}>
        <ActivityIndicator  animating style={{width: 150, height:150}} />
         <MyButton label="Login" onPress={async () => {
           await savePassword(); 
           const retrievedPassword = await getPassword(); 
           if(retrievedPassword){
             alert(retrievedPassword);
           }
         }}/>
         <MyButton label="Show Password" onPress={toggleShowPassword}/>
        </View>
      </View>
    );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
  
    },
    usernamePasswordContainer:{
      flex:2,
      backgroundColor:'green',
      justifyContent: 'center',
    },


    loginContainer:{
      flex:1, 
      paddingHorizontal:25,
  
    },
    loginButton:{
      margin: 5,
      height: 50,
      backgroundColor:'green',
      borderRadius:15,
      alignItems:'center',
      justifyContent:'center'
    },
    loginButtonText:{
      color:'white',
      fontSize:30,
      fontWeight:'bold',
    },
  
    loginButtonPressIn:{
      backgroundColor:'red'
    },
  
    loginButtonDefault:{
      backgroundColor:'green'
    },
  
  
  });