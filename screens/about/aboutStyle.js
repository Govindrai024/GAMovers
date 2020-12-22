import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
  home: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
     color:"#000",
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
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
  }
});
  
export default styles  