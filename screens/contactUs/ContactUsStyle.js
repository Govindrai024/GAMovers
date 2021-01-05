import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    // marginTop: 2,
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 15,
    width: width / 1.1,
    height: height / 16,
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
  bookingFormText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:width / 4.5,
    marginTop: "50%",
    marginBottom: 20,
    textAlign: "center",
    borderBottomColor : '#d3d3d3',
    borderBottomWidth: 1,
    paddingBottom : 5,
    width : 200,
    color : 'gray'
  },
 
});

export default styles;
