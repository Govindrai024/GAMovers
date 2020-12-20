import React, { useState} from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity,Image } from 'react-native';

//Component
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton'; 

//Style
import styles  from "./SignupStyle";


import AntDesign from 'react-native-vector-icons/AntDesign'

const LoginScreen = () => {
  const [email,setEmail] =  useState();
  const [password,setPassword] =  useState();

  return (

    <View style={styles.container}>
      
        <Text style={styles.text}>
        Create an account</Text>

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
            buttonTitle="Sign up"
            onPress={() => alert('Sign up clecked')}

         />

       <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

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
            onPress={() => alert("wellcome to facebook")}

          />

         <TouchableOpacity 
         style= {styles.forgetButton}
         onPress={() => navigation.navigate('Signup')}
         >
         <Text style={styles.navButtonText}>
          Don't have an account? Create here
         </Text>

         </TouchableOpacity>


    </View>

  );
}

export default LoginScreen 

