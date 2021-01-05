import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import Welcome from '../screens/welcome/Welcome'
import Login from '../screens/login/login'
import Signup from '../screens/signup/SignupScreen'
import Home from '../screens/home/home'
import BookingForm from '../screens/bookingForm/bookingForm'
import BookingForm2 from '../screens/bookingForm2/bookingForm'
import ContactUS from '../screens/contactUs/ContactUS'
import Profile from '../screens/UserProfile/UserProfile'
import UserProfile from '../screens/profile/profile'
import About from '../screens/about/about'


const Stack = createStackNavigator();


const screenOptionStyle =  {
  headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#04446b",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },

}

const  HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
        }}
      />
    
    <Stack.Screen
          name="BookingForm"
          component={BookingForm}
        />
    </Stack.Navigator>
  );
}

const ContactStack = () => {
  return (
  <Stack.Navigator
   screenOptions={screenOptionStyle}
  >
    <Stack.Screen
          name="ContactUs"
          component={ContactUS}
          options={{
            headerShown: true,
          }}
        />  
  </Stack.Navigator>

  )
}


const UserProfileStack = () => {
  return (
  <Stack.Navigator
   screenOptions={screenOptionStyle}
  >
    <Stack.Screen
          name="Profile"
          component={UserProfile}
          options={{
            headerShown: true,
          }}
        />  
  </Stack.Navigator>

  )
}
const BookingFormStack = () => {
  return (
  <Stack.Navigator
   screenOptions={screenOptionStyle}
  >
    <Stack.Screen
          name="Booking Form"
          component={BookingForm}
          options={{
            headerShown: true,
          }}
        />  
  </Stack.Navigator>

  )
}


const AboutStack = () => {
  return (
  <Stack.Navigator
   screenOptions={screenOptionStyle}
  >
    <Stack.Screen
          name="About"
          component={About}
          options={{
            headerShown: true,
          }}
        />  
  </Stack.Navigator>

  )
}

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "home"
              : "home";
          } else if (route.name === "ContactUs") {
            iconName = focused ? "ios-call" : "ios-call";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person";
          } else if (route.name === "About") {
            iconName = focused ? "book" : "book";
          } else if (route.name === "Booking Form") {
            iconName = focused ? "pencil" : "heart";
          }


          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: "#04446b",
        inactiveTintColor: "gray",
        style: {
          justifyContent: "space-around",
          paddingBottom: "1.2%",

          borderTopColor: "rgba(255, 255, 255, 0.35)",
          borderTopWidth: 0.5,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={UserProfileStack} />
      <Tab.Screen name="Booking Form" component={BookingFormStack} />
      <Tab.Screen name="ContactUs" component={ContactStack} />
      <Tab.Screen name="About" component={AboutStack} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return(
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#04446b',
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
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabScreen"
          component={TabScreen}
          options={{
            headerShown: false,
          }}

        /> 
             <Stack.Screen
          name="Booking Form2"
          component={BookingForm2}
          options={{
            headerShown: true,
          }}

        /> 
         <Stack.Screen
          name="Customer Profile"
          component={Profile}
          options={{
            headerShown: true,
          }}

        /> 


    </Stack.Navigator>
  )
}


export default StackNavigator