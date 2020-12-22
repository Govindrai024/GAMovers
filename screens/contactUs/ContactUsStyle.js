import { StyleSheet , Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({ 
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
  
  },
  home: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft:20,
    marginTop:20,
    marginBottom:10,
    

  },
  aboutText:{
    fontFamily:'Nunito-Bold',
    justifyContent: "space-between",
    fontSize:18,
    marginRight:20,
    marginLeft:20,
    padding:10,
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth:0,
    borderBottomWidth:0,
  },
  input: {
    // marginTop: 2,
    marginBottom: 2,
    marginRight: 5,
    width: width / 3,
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
  btn:{
    alignItems:"center",
    justifyContent:"center",
  },
  msg:{
    height: height / 5,
  }
});
  
export default styles  