import React from 'react' ; 
import { View,Text,TextInput,StyleSheet } from 'react-native';


interface IEntry {
    label: string, 
    isPassword: boolean
}

export const Entry : React.FC<IEntry> = (props) => {
    return (          
    <View style={styles.usernameContainer}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput secureTextEntry={props.isPassword} style={styles.username}/>  
      </View>)
}

const styles = StyleSheet.create(
    {
        usernameContainer:{
            flex:1,
            justifyContent:'center',
            backgroundColor:'pink',
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
          label:{
            fontSize: 20,
            fontWeight:'bold',
            margin:5,
          },
    }
) ; 