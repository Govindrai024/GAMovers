import React from 'react';
import {  Text, View,TouchableWithoutFeedback,ScrollView, Button } from 'react-native';
import { TextInput } from "react-native-paper";



//Styles
import  styles  from "./bookingFormStyle";

const BookingForm = ({navigation}) => {
  return (
    
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >        
<View style={styles.bgColor}>
  <ScrollView>      
  <View style={styles.container}>
    </View>
     <View>
          <Text style={styles.bookingFormTText}>Book it fast!! </Text>
          <Text style={styles.bookingFormTText2}>Do it check before submitting </Text>
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
                    <Text style={styles.bookingFormTText3}>Booking date:  </Text>
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
                    <Text style={styles.bookingFormTText3}>Booking time:  </Text>
                    <TextInput
                      style={styles.input}
                      labelName="facebook"
                      autoCapitalize="none"
                      placeholder="Enter your booking time"
                      left={<TextInput.Icon style={styles.
                      InputIcon}
                      icon='clock'
                      />}
                    />
                  </View>

                  <View>
                    <Text style={styles.bookingFormTText3}>Pick up location:  </Text>
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
                    <Text style={styles.bookingFormTText3}>Destination location:  </Text>
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
         title="Next"
         
         color="#842581"           
        onPress=
           {() => navigation.navigate('BookingForm2')}
        />
        </View>
    </View>
    </ScrollView>
</View>
</TouchableWithoutFeedback>
  );
}



export default BookingForm
