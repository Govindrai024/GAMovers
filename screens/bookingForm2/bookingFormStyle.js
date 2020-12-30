import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({ 
  infocontainer:{
    fontSize:20,
    marginLeft:20,
    marginRight:10,
    fontFamily:"Nunito-light",
    paddingBottom:10,
    justifyContent:'center',
    alignItems:'center'


  },
  infoCheck:{
    color:'red',
    marginTop:10
  },
  form2btn:{
    flexDirection:"row",
    margin:10,


  },btncontainer:{
    flex:1,
    justifyContent:"space-between",
    margin:10,
    justifyContent:'center',
    alignItems:'center'
  },
  bookingFormTText:{
    fontSize:28,

    margin:10,
    marginTop:30,
    fontWeight:'400',
    justifyContent:'center',
    alignItems:'center'
  }
});

  
export default styles  