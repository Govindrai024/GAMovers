import { Dimensions, StyleSheet } from "react-native";
import  colors  from "../../utilities/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      width: windowWidth,
      
    },
    body: {
      height: windowHeight * 0.32,
      backgroundColor: colors.headerBackground,
      borderBottomLeftRadius: 38,
      alignItems: "center",
      justifyContent: "center",
    },
    titleText: {
      fontFamily: "Nunito-Bold",
      fontSize: 34,
      fontWeight: "bold",
      color: "#051d5f",
      marginTop: 20,
    },
    footer: {
      flex: 1,
    },
    buttonChanges: {
      marginTop:30,
      marginBottom:2,
    }
  });

  export default styles