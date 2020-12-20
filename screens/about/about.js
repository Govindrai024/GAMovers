import React from 'react';
import {  Text, View,Button } from 'react-native';


const About = ({navigation}) => {
    return (
      <View style={styles.home}>
        <Text>About Screen</Text>
        <Button
              title = "Go About screen .. again"
              onPress={() => navigation.push('ABout')}
        />
           <Button
              title = "Go home"
              onPress={() => navigation.navigate('Home')}
        />
           <Button
              title = "Go back"
              onPress={() => navigation.goback()}
        />
           <Button
              title = "Go to the first screen"
              onPress={() => navigation.popToTop('Home')}
        />
      </View>
    );
  }


export default About
