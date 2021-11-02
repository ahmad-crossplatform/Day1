import React from 'react';
import { Pressable, View, Text, TextInput , StyleSheet} from 'react-native';
import { Entry } from './components/Entry';
import { useMainScreen } from './hooks/useMainScreen';

export const MainScreen: React.FC = () => {

  const {isPressed, setIsPressed, isPasswordHidden, toggleShowPassword} = useMainScreen();
    return(
        <View style={styles.container}>

        <View style={styles.usernamePasswordContainer}>

        <Entry label="Username" isPassword={false}/>

        <Entry label="Password" isPassword={isPasswordHidden}/>
       
        </View>
        <View style={styles.loginContainer}>
          <Pressable  onPressIn={()=>{setIsPressed(true)}} onPressOut={()=>{setIsPressed(false)}} onPress={() => {}}>
           <View 
           style={[styles.loginButton, 
                  isPressed?styles.loginButtonPressIn:styles.loginButtonDefault]}>
             <Text style={styles.loginButtonText}>Login</Text>
           </View>
           </Pressable>
  
           <Pressable  onPress={toggleShowPassword}>
           <View 
           style={[styles.loginButton, 
                  isPressed?styles.loginButtonPressIn:styles.loginButtonDefault]}>
             <Text style={styles.loginButtonText}>{isPasswordHidden?'Show':'Hide'} Password</Text>
           </View>
           </Pressable>
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