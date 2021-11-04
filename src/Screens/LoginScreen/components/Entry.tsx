import React from 'react' ; 
import { View,Text,TextInput,StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
interface IEntry {
    label: string, 
    isPassword: boolean
    OnTextChanged?: (text: string) => void;
    defaultValue?: string;
}

export const Entry : React.FC<IEntry> = (props) => {
  const [fontsLoaded] = useFonts({'CrazyFont':require('../../../../assets/fonts/CevicheOne-Regular.ttf')});
    return (          
    <View style={styles.usernameContainer}>
      {fontsLoaded && <Text style={styles.label}>{props.label}</Text>}
        
        <TextInput defaultValue={props.defaultValue} onChangeText={props.OnTextChanged} secureTextEntry={props.isPassword} style={styles.username}/>  
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
            fontFamily:'CrazyFont', 
            fontSize: 50,
            fontWeight:'bold',
            margin:5,
          },
    }
) ; 