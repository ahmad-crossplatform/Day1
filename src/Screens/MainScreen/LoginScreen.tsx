import React from 'react';
import { Pressable, View, Text, TextInput , StyleSheet} from 'react-native';
import { Entry } from './components/Entry';
import { MyButton } from './components/MyButton';
import { useMainScreen } from './hooks/useMainScreen';

export const LoginScreen: React.FC = () => {

  const {isPasswordHidden, toggleShowPassword} = useMainScreen();
    return(
        <View style={styles.container}>

        <View style={styles.usernamePasswordContainer}>

        <Entry label="Username" isPassword={false}/>

        <Entry label="Password" isPassword={isPasswordHidden}/>
       
        </View>
        <View style={styles.loginContainer}>
         <MyButton label="Login" onPress={() => alert('login')}/>
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