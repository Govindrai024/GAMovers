import React from 'react';
import { Image,  StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/logo.jpg'; 
import styles  from "./logoStyle";

const  WelcomeLogo =() => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} /> 

      <Text style={styles.logoTitle}> 
        To get into GA MOVERS App from your phone with a friend, just press the button below!
      </Text>
    </View>
  );
}

export default WelcomeLogo