import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  Provider as PaperProvider } from 'react-native-paper';

//Screns
import Home from './screens/home/home'
import Welcome from './screens/welcome/Welcome'
import Login from './screens/login/login'
import Signup from './screens/signup/SignupScreen'
// import About from './screen/about'


//Utilities                                                                  
import theme from './utilities/theme';





const Stack = createStackNavigator();

const StackNavigator = () => {
  return(
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}

      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signp"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,

          }}
        />
      </Stack.Navigator>
  )
}

function App(props) {
                                 
    return (
      <NavigationContainer >
        <PaperProvider theme={theme} >
        <StackNavigator />
        </PaperProvider>
        
      </NavigationContainer>
    );
  }



export default App;






