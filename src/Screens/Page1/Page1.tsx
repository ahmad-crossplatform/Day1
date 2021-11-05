import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Page1 = () => {
    return (
        <View style={styles.container}>
            <Text>Hello From Page 1</Text>
        </View>
    )
}

export default Page1

const styles = StyleSheet.create({
    container : {flex: 1 , justifyContent: 'center', alignItems: 'center'}
})
