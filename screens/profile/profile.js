import React from 'react';
import { StyleSheet, Text, View, Image,  FlatList } from 'react-native';
import { Card,FAB } from 'react-native-paper'


const Home = ({navigation}) => {
    const data = [
        {id:1,name:"Govind Rai",position:"Web Developer"},
        {id:2,name:"Rai",position:"Co-Fonunder"},
        {id:3,name:"Rai",position:"Co-Fonunder"},
        {id:4,name:"Rai",position:"Co-Fonunder"},
        {id:5,name:"Rai",position:"Co-Fonunder"},
        {id:6,name:"Rai",position:"Co-Fonunder"},
        {id:7,name:"Rai",position:"Co-Fonunder"},
        {id:8,name:"Rai",position:"Co-Fonunder"},
        {id:9,name:"Rai",position:"Co-Fonunder"},
        {id:10,name:"Santosh",position:"React Natve Developer"}
       

    ] 



    const renderList = ((item) =>{
        return (
            <Card style={styles.mycard } 
             onPress={() => navigation.navigate('Customer Profile')}
            >
            <View style={styles.cardView}>
                <Image
                   style={{ width: 60, height: 60, borderRadius: 30, margin: 10 }}
                    source={{ uri: "https://pbs.twimg.com/profile_images/1225687863439712256/wFtOuQx8_400x400.jpg" }}
                        />
    
             <View style={{marginLeft:20}}>
                <Text style={styles.text}> {item.id}</Text>
                <Text style={styles.text}> {item.name}</Text>
                <Text style={styles.text}> {item.position}</Text>
            </View>
           </View>
    
            </Card>
        )    
})


    return(
        <View>
        {/* {raederList} */}
        <FlatList
            data={data}
            renderItem = {({item})=>{
              return  renderList(item)
            }}
            keyExtractor={item => '${item.id}'}
                    />

     <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors:{accent:"#04446b"}}}
                onPress={() => alert('Pressed')}
  />
        </View>
    )
        
    
}


const styles = StyleSheet.create({
    mycard: {
        margin: 5,

    },
    cardView: {
        flexDirection: "row",
        padding: 5,
    },
    text: {
        fontSize:22,
        },
        fab: {
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
          }
});

export default Home