import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/AuthStack/'
import {  Provider as PaperProvider } from 'react-native-paper';
import  AppLoading  from 'expo-app-loading';
import { useFonts } from 'expo-font';


import MyStack from './navigation/AuthStack'

//Screns
import Home from './screens/home/home'
import Welcome from './screens/welcome/Welcome'
import Login from './screens/login/login'
import Signup from './screens/signup/SignupScreen'
import About from './screens/about/about'
import BookingForm from "./screens/bookingForm/bookingForm";
import BookingForm2 from "./screens/bookingForm2/bookingForm";
import Profile from "./screens/profile/profile";
import UserProfile from "./screens/UserProfile/UserProfile";
import CreateEmployee from "./screens/createEmployee/createEmployee";
import ContactUs from "./screens/contactUs/ContactUS";


//Utilities                                                                  
import theme from './utilities/theme';

function App(props) {
  let [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <PaperProvider theme={theme}>
        <StackNavigator/> 

        </PaperProvider>
        
      </NavigationContainer>
    );
  }
}


export default App;






