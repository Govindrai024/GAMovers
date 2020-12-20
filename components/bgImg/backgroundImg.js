import React from "react";
import { StyleSheet, Text, View,ImageBackground} from "react-native";
import styles from './bgStyle'

const BgImg = (props) => {
  return (
    <View style = { styles.container } >

      <View style= { styles.logoContainer }>
        <Text style = { styles.logoText }>
        MOVERS
        </Text>
        <Text style = { styles.logoDescription }>
          Get your Updates here!!
        </Text>

      </View>
    </View>
  );
}

export default  BgImg