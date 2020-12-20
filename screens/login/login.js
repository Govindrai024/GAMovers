import React, { useState} from 'react';
import {  Text, View, TouchableOpacity,Image } from 'react-native';

//Components
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton'; 

//Style
import styles  from "./loginStyle";


import AntDesign from 'react-native-vector-icons/AntDesign'

const LoginScreen = () => {
  const [email,setEmail] =  useState();
  const [password,setPassword] =  useState();

  return (

    <View style={styles.container}>
      <Image 
        source= {require('../../assets/logo.jpg')}
        style={styles.logo}
        />
        <Text style={styles.text}>
        GA Movers</Text>

        <FormInput 
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText= "Email"
            iconType="user"
            keyboardType="email-address" 
            autoCapitalize="none"
            autoCorrect={false}
        />

        
        <FormInput 
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText= "Passwordl"
            iconType="lock"
            secureTextEntry={true}
         />

         <FormButton
            buttonTitle="Sign in"
            onPress={() => navigation.navigate("Home")}  

         />

         <TouchableOpacity style={styles.forgetButton} onPress={() => alert('pressed')}>
           <Text style={styles.navButtonText}> Forget password? </Text>
         </TouchableOpacity>

          <SocialButton 
            buttonTitle="Sign in with Facebook"
            btnType="facebook"
            color="#fff"
            backgroundColor="#5583ed"
            onPress={() => alert("wellcome to facebook")}

          />

          <SocialButton 
            buttonTitle="Sign in with google"
            btnType="google"
            color="#f23e0c"
            backgroundColor="#d3e0d6"
            onPress={() => alert("wellcome to google")}

          />

         <TouchableOpacity 
         style= {styles.forgetButton}
         onPress={() => navigation.navigate('about')}
         >
         <Text style={styles.navButtonText}
          onPress={() => alert("wellcome ")}>
          Don't have an account? Create here
         </Text>

         </TouchableOpacity>


    </View>

  );
}

export default LoginScreen 

