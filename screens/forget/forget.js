import React, { useState } from 'react';
import {  Text, View, ,Image } from 'react-native';

//Screens
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

//Styles
import  styles  from "./forgetStyle";



const Forget = () => {
  const [email,setEmail] =  useState();

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

         <FormButton
            buttonTitle="Sign in"
            onPress={() => alert('clicked')}

         />

    </View>

  );
}

export default Forget 
