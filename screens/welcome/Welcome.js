import React from "react";
import {  Text, View  } from "react-native";



//Component
import FormButton  from "../../components/FormButton";
import  WelcomeLogo  from "../../components/logo/logo";

//Style
import  styles  from "./welcomStyle";
import  BgImg  from "../../components/bgImg/backgroundImg";

export default function Welcome({ navigation }) {

 
    return (

        <View style={styles.container}>
       
          <View style={styles.body} >
            <Text style={styles.titleText}>Welcome To GA MOVERS</Text>
          </View>
           <View>
            <WelcomeLogo />
           </View> 

          <View style={styles.footer}>

          <FormButton
            buttonTitle="Get Started"
            onPress={() => navigation.navigate("Login")}  
          />          
      </View>
    </View>
  );
}
