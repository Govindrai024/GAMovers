import React from 'react';
import {  Text, View,Button } from 'react-native';

//Styles
import  styles  from "./aboutStyle";

const About = ({navigation}) => {
  return (
    <View style={styles.home}>
      <Text style={styles.aboutText}>
      It is a long 
      fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </Text>

     
     
     <View>
          <Button
                title = "<"
                onPress={() => navigation.navigate('About')}
          />
     </View>
     
    </View>
  );
}



export default About
