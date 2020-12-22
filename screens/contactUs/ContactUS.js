import React from 'react';
import {  Text, View, Button } from 'react-native';
import { TextInput } from "react-native-paper";

//Styles
import  styles  from "./ContactUsStyle";

const ContactUs = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.home}>We are available for you.</Text>
      </View>

      <View style={styles.aboutText}>
          <View>
          <TextInput
                style={styles.input}
                labelName="UserName"
                autoCapitalize="none"      
                placeholder="Enter username"
                left={<TextInput.Icon style={styles.InputIcon}
                name="person"         
                      />}
                    />


        <TextInput
                style={styles.input}
                labelName="email"
                autoCapitalize="none"      
                placeholder="Enter email address"
                left={<TextInput.Icon style={styles.InputIcon}
                name="email"         
                      />}
                    />      

        <TextInput
                style={[styles.input,styles.msg]}
                labelName="msg"
                autoCapitalize="none"      
                outlin="none"
                placeholder="Typ your message here....."
                left={<TextInput.Icon style={styles.InputIcon}
                name="message"  
                
                      />}
                    />            

          </View>
      </View>
      <View style={styles.btn}>
          <Button
                title = "Contact Us"
                onPress={() => navigation.navigate('ContactUs')}
          />
     </View>
     
    </View>
  );
}



export default ContactUs 
