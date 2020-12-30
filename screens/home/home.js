
import React from 'react';
import {  Text, View,TouchableWithoutFeedback,ScrollView, Keyboard,StatusBar} from 'react-native';
import {Card, Title,Button,Avatar} from "react-native-paper";
import Heading from "../../components/heading/heading";

//Styles
import  styles  from "./homeStyle";


// img https://image.freepik.com/free-vector/moving-new-apartment-concept_74855-7628.jpg

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const Img = () => (
  <Card>
    <Card.Cover 
    style={styles.Silder}
    source={{ uri: 'https://i.pinimg.com/originals/ab/4e/74/ab4e74dac8eb5eabd99a7f18ab75c942.gif' }} />
  </Card>
);


const Home = ({navigation}) => {
  return (

 
    
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >        

  <ScrollView>      
    <View style={styles.card}>
    
    <Img />
    </View>

    <View>
         <View>
            <Heading 
        
            />
          <View>
        
          {/* cards for booking form and transport in vertical */}
            <View style={styles.ServicesCard}>
            <Card style={styles.ServicesCardDesign}>
                   
                    <Card.Cover 
                      style={styles.ImgSet}
                      source={{ uri: 'https://www.animatedimages.org/data/media/1373/animated-mover-image-0034.gif'}} 

                      />
                  <Text style={styles.ServicesCardText}>Book a service</Text>
                    
            </Card>
              
            <Card style={styles.ServicesCardDesign}>
                  
                    <Card.Cover 
                      style={styles.ImgSet}
                      source={{ uri: 'https://www.animatedimages.org/data/media/1373/animated-mover-image-0044.gif' }} 

                      />
                        <Text style={styles.ServicesCardText}>Book a Transport</Text>
            </Card>
            </View>
      </View>
      </View>
    
       <View>
         <View>
            <Heading />
          <View>
        
            <View style={styles.ServicesCard}>
            <Card style={styles.ServicesCardDesign}>
           
                    <Card.Cover 
                      style={styles.ImgSet}
                      source={{ uri: 'https://www.animatedimages.org/data/media/1373/animated-mover-image-0046.gif'}} 

                      />
                       <Text style={styles.ServicesCardText}>Apply for Job</Text>
            </Card>
              
            <Card style={styles.ServicesCardDesign}>
                 <Card.Cover 
                  style={styles.ImgSet}
                  source={{ uri: 'https://www.animatedimages.org/data/media/98/animated-people-and-human-image-0120.gif' }} 
                      />
                  <Text style={styles.ServicesCardText}>Apply for Internship</Text>
            </Card>
            </View>
        </View>

        <View>
         <View>
            <Heading />
          <View>
        
            <View style={styles.ServicesCard}>
            <Card style={styles.ServicesCardNews}>
                    <Text  style={styles.ServicesCardNewsText}> GA Movers announced multiple postions.. </Text>
                    <Text  style={styles.ServicesCardNewsText}> GA Movers offers multiple Jos oppertunities.. </Text>
                    <Text  style={styles.ServicesCardNewsText}> GA Movers goin to invite for openning ceremony... </Text>
            </Card>
              
          
            </View>
        </View>
        </View>
        </View>

          {/* <View style={styles.container} >
          <Button
              mode="contained"
              onPress={() => navigation.navigate("Profile")}
              style={{ width: 120, marginTop: 10 , marginBottom : 10}}
              color = '#04446b'
            >
              Submit
            </Button>
              </View> */}
    </View>
    </View>
    </View>
    </ScrollView>
    
</TouchableWithoutFeedback>

  );
}


export default Home
























// import React from "react";
// import { Text, View } from "react-native";
// import { Button, useTheme } from "react-native-paper";

// //Styles
// import styles from "./homeStyle";

// const Home = ({ navigation }) => {
//   const { colors } = useTheme();
//   return (
//     <View style={styles.home}>
//       <Text>Home Screen </Text>

//       <Button
//         mode="contained"
//         onPress={() => navigation.navigate("BookingForm")}
//         style={{ width: 200, marginTop: 10 }}
//         color = '#04446b'
//       >
//         Go To Booking
//       </Button>
//       <Button
//         mode="contained"
//         onPress={() => navigation.navigate("ContactUs")}
//         style={{ width: 150, marginTop: 10 }}
//         color = '#04446b'
//       >
//         Contact Us
//       </Button>
//       <Button
//         mode="contained"
//         onPress={() => navigation.navigate("Profile")}
//         style={{ width: 150, marginTop: 10 }}
//         color = '#04446b'
//       >
//         Profile
//       </Button>
//     </View>
//   );
// };

// export default Home;
