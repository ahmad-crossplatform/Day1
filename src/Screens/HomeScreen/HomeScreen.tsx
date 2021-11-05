import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackScreens, TabScreens } from '../../helpers/types';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import { MaterialIcons } from '@expo/vector-icons'
interface IHomeScreen extends  NativeStackScreenProps<StackScreens,'HomeScreen'> {
    age : number 
}

export const HomeScreen: React.FC<IHomeScreen> = (props) => {

    const TabsNavigation = createBottomTabNavigator<TabScreens>(); 


    const params = props.route.params; 
    return (
        <TabsNavigation.Navigator>
            <TabsNavigation.Screen name="Page1" component={Page1} options={{tabBarIcon: ({focused}) => {return (<MaterialIcons name="verified-user" color={focused?'blue':'grey'} size={30}/>)}}}/>
            <TabsNavigation.Screen name="Page2" component={Page2} options={{headerShown:false, tabBarIcon: ({focused}) => <MaterialIcons name="facebook" size={30} color={focused?'blue':'grey'}/>}}/>
        </TabsNavigation.Navigator>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center' , 
        alignItems: 'center', 
        flex:1
    }
})
