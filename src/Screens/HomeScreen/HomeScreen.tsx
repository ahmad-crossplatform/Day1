import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome Home </Text>
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
