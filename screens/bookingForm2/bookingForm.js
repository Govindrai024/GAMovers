import React,{useState} from 'react';
import {  Text, View,TouchableWithoutFeedback,ScrollView, Button } from 'react-native';
import {  Card, Title, Paragraph,Checkbox } from "react-native-paper";



//Styles
import  styles  from "../bookingForm/bookingFormStyle";
import  form2Style  from "./bookingFormStyle";

const BookingForm = ({navigation}) => {

  const [checked, setChecked] = React.useState(false);

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
    </View>

    
    <Card>
        <View>

            <Text style={form2Style.infocontainer}>
            All items are picked?
            <Checkbox
            
            style={form2Style.infoCheck}
              status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                setChecked(!checked);
                }}
    /></Text>
            
        </View>    

        <View>

      <Text style={form2Style.infocontainer}>
        Do you want packing?
        <Checkbox
        uncheckedColor="blue"
          style={form2Style.infoCheck}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
          setChecked(!checked);
          }}
      /></Text>

        </View>   
       



     <View>

      <Text style={form2Style.infocontainer}>
        Do you want Labor with transport?
        <Checkbox
        uncheckedColor="blue"
          style={form2Style.infoCheck}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
          setChecked(!checked);
          }}
      /></Text>

        </View>  


    <View>

      <Text style={form2Style.infocontainer}>
        How many labors?
        <Checkbox
        uncheckedColor="blue"
          style={form2Style.infoCheck}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
          setChecked(!checked);
          }}
      /></Text>
  </View>  

     <View>
        <Text style={form2Style.infocontainer}>
        Want to upload additional docs?
        <Checkbox
         uncheckedColor="blue"
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
          setChecked(!checked);
          }}
      /></Text>
      </View>  



        </Card>









      <View style={form2Style.btncontainer} >

      <Button
          
          icon='camera'
          title="Upload"
          color="#0575E6"           
          onPress=
          {() => navigation.navigate('BookingForm2')}
          />
      <View  style={form2Style.form2btn} >
         <Button

              title="Cancel"
              color="#0575E6"           
              onPress=
              {() => navigation.navigate('BookingForm2')}
        />
        
          <Button
              title="Submit"
              color="#0575E6"           
              onPress=
              {() => navigation.navigate('BookingForm2')}
        />
          
      </View>
       
        </View>
    </View>
    </ScrollView>
</View>
</TouchableWithoutFeedback>
  );
}



export default BookingForm
