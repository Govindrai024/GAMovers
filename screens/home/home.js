import React from "react";
import { Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";

//Styles
import styles from "./homeStyle";

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.home}>
      <Text>Home Screen </Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate("BookingForm")}
        style={{ width: 200, marginTop: 10 }}
        color = '#04446b'
      >
        Go To Booking
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("ContactUs")}
        style={{ width: 150, marginTop: 10 }}
        color = '#04446b'
      >
        Contact Us
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Profile")}
        style={{ width: 150, marginTop: 10 }}
        color = '#04446b'
      >
        Profile
      </Button>
    </View>
  );
};

export default Home;
