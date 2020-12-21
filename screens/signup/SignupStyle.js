import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const signupStyles = StyleSheet.create({
  header: {
    flex: 1,
  },
  body: {
    flex: 1,
    borderTopLeftRadius: 65,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Nunito-Bold",
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    width: width / 1.4,
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

export default signupStyles;
