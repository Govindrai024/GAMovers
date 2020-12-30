import React from 'react';
import { StyleSheet, Text, View, Image,  FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import {Title, Card, Button} from 'react-native-paper'
import {MaterialIcons, Entypo } from '@expo/vector-icons'

const UserProfile = () => {
    return (
    <View style={styles.root}>
        <LinearGradient
            colors={['#1c69e6','#5691f0']}
            style={{height:'20%'}}
        />

        <View style={{alignItems:"center"}}>
        <Image
            style={{width:100,height:100,borderRadius:170/3,marginTop:-50}}
            source={{uri:"https://pbs.twimg.com/profile_images/1225687863439712256/wFtOuQx8_400x400.jpg"}}
        />
        </View>

        <View style={{alignItems:"center"}}>
            <Title>Govind Rai</Title>
            <Text style={{fontSize:18}}>React Native Developer</Text>
        </View>

        <Card style={styles.myCard}>
            <View style={styles.cardContent}>
                <MaterialIcons
                    name="email" size={32} color="#04446b" />
                <Text style={styles.mytext}>React Native Developer</Text>
            </View>
        </Card>


        <Card style={styles.myCard}>
            <View style={styles.cardContent}>
                <MaterialIcons
                    name="email" size={32} color="#04446b" />
                <Text style={styles.mytext}>govindrai024@gmail.com</Text>
            </View>
        </Card>


        <Card style={styles.myCard}>
            <View style={styles.cardContent}>
                <Entypo
                    name="phone" size={32} color="#04446b" />
                <Text style={styles.mytext}>03363203306</Text>
            </View>
        </Card>

        
        <Card style={styles.myCard}>
            <View style={styles.cardContent}>
            <MaterialIcons
                    name="attach-money" size={32} color="#04446b"/>
                <Text style={styles.mytext}>Rs: 2 LPA</Text>
            </View>
        </Card>
        
        
        <View style={{flexDirection:"row", justifyContent:"space-around",padding:15}}>
        <Button 
          icon="account-edit"
          mode="contained"
          theme={theme}
          onPress={() => console.log('Pressed')}>
                Edit
      </Button>
      <Button 
          icon="delete"
          mode="contained"
          theme={theme}
          onPress={() => console.log('Pressed')}>
                Fire Employee
      </Button>
        </View>

    </View>
    )
}


const theme = {
    colors:{
        primary:"#04446b"
    }

}
const styles = StyleSheet.create({
    root:{
        flex:1
    },
    myCard:{
        margin:3,
        
    },
    cardContent:{
        flexDirection:'row',
        padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})


export default UserProfile

