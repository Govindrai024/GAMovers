import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  Box: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    input: {
      // marginTop: 2,
      marginBottom: 2,
      marginRight: 5,
      width: width / 1.2,
      height: height / 14,
      backgroundColor: "#f5f5f5",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    InputIcon: {
      borderRightWidth: 1,
      borderRadius: 0,
      marginRight: 15,
      width: 40,
      height: "160%",
    },
       
   
  });



  export default styles