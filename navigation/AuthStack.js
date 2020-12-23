import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Welcome from '../screens/welcome/Welcome'
import Login from '../screens/login/login'
import Signup from '../screens/signup/SignupScreen'
import Home from '../screens/home/home'
import BookingForm from '../screens/bookingForm/bookingForm'
import ContactUS from '../screens/contactUs/ContactUS'
import ContactUs from '../screens/contactUs/ContactUS';
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
  <Stack.Navigator>
    <Stack.Screen
          name="ContactUs"
          component={ContactUS}
        />  
  </Stack.Navigator>

  )
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
      <Tab.Screen name="ContactUs" component={ContactStack} />
    </Tab.Navigator>
  );
};

// const StackNavigator = () => {
//   return(
//       <Stack.Navigator
//         screenOptions={{
//           headerTitleAlign: 'center',
//           headerStyle: {
//             backgroundColor: '#56ab2f',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}

//       >
//          <Stack.Screen
//           name="Welcome"
//           component={Welcome}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{
//             headerShown: false,
//           }}
//         /> 
//         <Stack.Screen
//           name="Signup"
//           component={Signup}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//         /> 
//     </Stack.Navigator>
//   )
// }


export default TabNavigator