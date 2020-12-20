import React from 'react';
import {  Text, View,Button } from 'react-native';

//Styles
import  styles  from "./homeStyle";


const Home = ({navigation}) => {
  return (
    <View style={styles.home}>
      <Text>Home Screen</Text>

      <Button
            title = "Go detail screen"
            onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}



export default Home
