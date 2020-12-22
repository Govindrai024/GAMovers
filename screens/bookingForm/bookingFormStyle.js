import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
        
      },
      bgColor:{
        backgroundColor:'lightgreen',
    
      },
    
 
input: {
  // marginTop: 2,
  marginBottom: 5,
  marginRight: 10,
  marginLeft: 10,
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
bookingFormTText:{
  fontSize:30,
  fontWeight:"bold",
  marginLeft:10,
  marginTop:10,

},
bookingFormTText2:{
fontSize:18,
fontWeight:"100",
marginLeft:10,
marginBottom:10,
color:'red',
},
bookingFormTText3:{
  fontSize:20,
  fontWeight:"bold",
  marginLeft:10,
  marginTop:10,
  marginBottom:3,

},
});

  
export default styles  