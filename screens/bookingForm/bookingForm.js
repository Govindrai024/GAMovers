import React from 'react';
import {  Text, View,TouchableWithoutFeedback,ScrollView, Keyboard} from 'react-native';
import { TextInput , Button } from "react-native-paper";



//Styles
import  styles  from "./bookingFormStyle";

const BookingForm = ({navigation}) => {
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
                      icon='person'
                      />}
                    />
                   
                   <TextInput
                      style={styles.input}
                      labelName="Mobile No"
                      autoCapitalize="none"
                      placeholder="Enter mobile number"
                      left={<TextInput.Icon style={styles.
                      InputIcon}
                      icon='phone'
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
                      labelName="Location"
                      autoCapitalize="none"
                      placeholder="Enter your address"
                      left={<TextInput.Icon style={styles.
                      InputIcon}
                      icon='home'
                      />}
                    />
        
                  <View>
                    
                    <TextInput
                      style={styles.input}
                      labelName="facebook"
                      autoCapitalize="none"
                      placeholder="Enter your booking date"
                      left={<TextInput.Icon style={styles.
                      InputIcon}
                      icon='note'
                      />}
                    />
                  </View>
                  <View>
              
                    <TextInput
                      style={styles.input}
                      labelName="PickUp"
                      autoCapitalize="none"
                      placeholder="Enter your pick up location"
                      left={<TextInput.Icon style={styles.
                      InputIcon}
                      icon='map'
                      />}
                    />
                  </View>

                  <View>
                    <TextInput
                      style={styles.input}
                      labelName="DestinationLocation"
                      autoCapitalize="none"
                      placeholder="Enter your destination location"
                      left={<TextInput.Icon style={styles.
                      InputIcon}
                      icon='note'
                      />}
                    />
                  </View>

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



export default BookingForm
