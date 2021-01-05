import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Silder:{
    width:"100%",
    height:220,

  },
  ServicesCard: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    
  },
  ServicesCardText:{
    fontSize:15,
    textAlign:"center",
    fontWeight:"normal",
    color:"#663399" 
  },
  ServicesCardDesign: {
    height:100,
    width:'40%',
    marginLeft:10,
    marginRight:10,
    borderTopEndRadius:10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
  },
  ServicesCardNews:{
    height:90,
    width:'90%',
    marginLeft:10,
    marginRight:10,
    borderTopEndRadius:10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
  },
  ServicesCardNewsText:{
    fontSize:18,
    textAlign:"center",
    fontStyle:"italic",
    fontWeight:"normal",
    color:"blue" 
  },
  ImgSet:{
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#E2E2E2',
    padding:10,
  },
 
});

export default styles;
