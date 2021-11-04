import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
interface IMyButton {
    label: string, 
    onPress: () => void ; 
}
export const MyButton:React.FC<IMyButton> = (props) => {

    const [isPressed, setIsPressed] = useState(false);
    return (
        <Pressable  onPressIn={()=>{setIsPressed(true)}} onPressOut={()=>{setIsPressed(false)}} onPress={props.onPress}>
           <View 
           style={[styles.button, 
                  isPressed?styles.pressIn:styles.default]}>
             <Text style={styles.label}>{props.label}</Text>
           </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        margin: 5,
        height: 50,
        backgroundColor:'green',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'
      },
      label:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
      },
    
      pressIn:{
        backgroundColor:'red'
      },
    
      default:{
        backgroundColor:'green'
      },
});

