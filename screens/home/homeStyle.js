import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  HomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:width / 12.5,
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
    borderBottomColor : '#d3d3d3',
    borderBottomWidth: 1,
    paddingBottom : 5,
    width : 200,
    color : 'gray'
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
  ServicesCardDesign : {
    height:100,
    width:'40%',
    marginLeft:10,
    marginRight:10,
    borderRadius:0.1,
    borderColor:'blue',
    

  },
  ServicesCardNews:{
    height:90,
    width:'90%',
    marginLeft:10,
    marginRight:10,
    borderRadius:0.1,
    borderColor:'blue',
  },
  ServicesCardNewsText:{
    fontSize:18,
    textAlign:"center",
    fontStyle:"italic",
    fontWeight:"normal",
    color:"blue" 
  },
  ImgSet:{
    height:"80%"
  }
 
});

export default styles;
