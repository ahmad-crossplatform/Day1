import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text, SafeAreaView, ScrollView } from 'react-native';
import { Entry } from './components/Entry';
import { MyButton } from './components/MyButton';
import { useMainScreen } from './hooks/useMainScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MaterialIcons } from '@expo/vector-icons'
import Logo from '../../../assets/gaming.svg';
import { DemoContext } from '../../context/DemoContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../../helpers/types';

interface ILoginScreen extends NativeStackScreenProps<StackScreens, 'LoginScreen'> {

}


export const LoginScreen: React.FC<ILoginScreen> = (props) => {
  const context = React.useContext(DemoContext);
  const [password, setPassword] = React.useState("")
  const { isPasswordHidden, toggleShowPassword } = useMainScreen();
  const savePassword = async () => await AsyncStorage.setItem("password", password)
  const getPassword = async (): Promise<string | null> => await AsyncStorage.getItem("password")
  React.useEffect(() => {
    const init = async () => {
      const passwordFound = await getPassword();
      if (passwordFound) {
        setPassword(passwordFound);
        console.log(password)
      }
    }
    init();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Logo width={200} height={200} />
        <View style={styles.usernamePasswordContainer}>
          <Text style={{ fontSize: 30, color: 'yellow' }}>{context?.simpleText ?? "EMPTY"}</Text>
          <Entry label="Username" isPassword={false} OnTextChanged={(text) => context?.setSimpleText(text)} />

          <Entry label="Password" defaultValue={password} isPassword={isPasswordHidden} OnTextChanged={(text) => setPassword(text)} />
        </View>
        <View style={styles.loginContainer}>
          <MaterialIcons name="accessibility-new" size={50} color="red" />
          <ActivityIndicator animating style={{ width: 150, height: 150 }} />
          <MyButton label="Login" onPress={async () => {
            await savePassword();
            const retrievedPassword = await getPassword();
            if (retrievedPassword) {
              props.navigation.navigate('HomeScreen', { userId: 13 })
            }
          }} />
          <MyButton label="Show Password" onPress={toggleShowPassword} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  usernamePasswordContainer: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
  },


  loginContainer: {
    flex: 1,
    paddingHorizontal: 25,

  },
  loginButton: {
    margin: 5,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  loginButtonPressIn: {
    backgroundColor: 'red'
  },

  loginButtonDefault: {
    backgroundColor: 'green'
  },


});