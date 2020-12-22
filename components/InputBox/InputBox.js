import React from 'react';
import {
   Text,
   View,  
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView, } from 'react-native';
import { TextInput } from "react-native-paper";

import styles  from "./InputBoxStyle";

export default function InputBOx({ navigation }) {  

  return (
  
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.Box}>
          {/* style={{ flex: 1, marginTop: 90 }} */}
            <View >
            <ScrollView>
              
                  <View>
                    <TextInput
                      style={styles.input}
                      labelName="facebook"
                      autoCapitalize="none"
                      
                      placeholder="Enter username"
                      left={<TextInput.Icon style={styles.
                      InputIcon}
                      
                      name="facebook" 
                        
                      />}
                    />
               
                  </View>
              </ScrollView>


            </View>
      
          </View>
        </TouchableWithoutFeedback>
    
  );
}
