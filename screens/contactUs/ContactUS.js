import React from 'react';
import {  Text, View,TouchableWithoutFeedback,ScrollView, Keyboard} from 'react-native';
import { TextInput , Button } from "react-native-paper";

//Styles
import  styles  from "./ContactUsStyle";

//logo
const Logo = require('../../assets/icon/user.png')

const ContactUs = ({navigation}) => {
  return (
    
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >        

  <ScrollView>      
  <View style={styles.container}>
    </View>
     <View>
          <Text style={styles.bookingFormText}>Give Your Details </Text>
      <View>
                 
           <TextInput
              style={styles.input}
              labelName="Full name"
              autoCapitalize="none"
              placeholder="Enter your full name"
              left={<TextInput.Icon style={styles.
              InputIcon}
              icon={Logo}
         />}
          />

         <TextInput
           style={styles.input}
           labelName="EmailAddress"
           autoCapitalize="none"
           placeholder="Enter your email address"
           left={<TextInput.Icon style={styles.
           InputIcon}
           icon='email'
           />}
           />

        <TextInput
           style={styles.input}
           labelName="Msg"
           autoCapitalize="none"
           placeholder="Enter your messsage.."
           left={<TextInput.Icon style={styles.
           InputIcon}
           icon='message'
           />}
           />
    </View>

    <View style={styles.container} >
    <Button
        mode="contained"
        onPress={() => navigation.navigate("Profile")}
        style={{ width: 120, marginTop: 10 , marginBottom : 10}}
        color = '#04446b'
      >
        Submit
      </Button>
        </View>
    </View>
    </ScrollView>
</TouchableWithoutFeedback>
  );
}


export default ContactUs
