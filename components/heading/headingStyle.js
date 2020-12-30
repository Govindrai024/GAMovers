import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  HomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:width / 12.5,
    marginTop: 15,
    marginBottom: 15,
    borderBottomColor : '#d3d3d3',
    borderBottomWidth: 1,
    paddingBottom : 3,
    width : 200,
    color : 'gray'
  },
 
});

export default styles;
