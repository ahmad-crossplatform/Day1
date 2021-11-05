import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackScreens } from '../../helpers/types';

interface IHomeScreen extends  NativeStackScreenProps<StackScreens,'HomeScreen'> {
    age : number 
}

export const HomeScreen: React.FC<IHomeScreen> = (props) => {

    const params = props.route.params; 
    return (
        <View style={styles.container}>
            <Text>Welcome Home </Text>
            <Text>{params.userId} </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center' , 
        alignItems: 'center', 
        flex:1
    }
})
