import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

export default function App() {
  const [isPressed,setIsPressed] = useState(false); 
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);


  return (
    <View style={styles.container}>

      <View style={styles.usernamePasswordContainer}>
        <View style={styles.usernameContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.username}/>  
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.password} secureTextEntry={isPasswordHidden}/>  
        </View>
      </View>
      <View style={styles.loginContainer}>
        <Pressable  onPressIn={()=>{setIsPressed(true)}} onPressOut={()=>{setIsPressed(false)}} onPress={() => {}}>
         <View 
         style={[styles.loginButton, 
                isPressed?styles.loginButtonPressIn:styles.loginButtonDefault]}>
           <Text style={styles.loginButtonText}>Login</Text>
         </View>
         </Pressable>

         <Pressable  onPress={() => {setIsPasswordHidden(!isPasswordHidden)}}>
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
  usernameContainer:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'pink',
    paddingHorizontal:20,
    
  },
  passwordContainer:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'gray',
    paddingHorizontal:20,
  },
  username:{

    backgroundColor:'white',
    fontSize:25,
    borderColor:'black',
    borderWidth:2,
    height:50,
    borderRadius:15,

  },
  password:{
    backgroundColor:'white',
    fontSize:25,
    borderColor:'black',
    borderWidth:2,
    height:50,
    borderRadius:15,
  },
  label:{
    fontSize: 20,
    fontWeight:'bold',
    margin:5,
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
