import React from "react";
import { StyleSheet,View, TouchableWithoutFeedback,Keyboard,ScrollView,Text,} from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, useTheme } from "react-native-paper";
import { globalStyles } from "../../components/globalstyle/globalStyle";
import  loginStyles  from "./loginStyle"
import Box from "../../components/box/Box";
import Container from "../../components/container/Container";


const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function Login({ navigation }) {
  const { colors } = useTheme();
  

  return (
    <Container>
      <Box titletext="LOGIN" />
      <View style={loginStyles.header}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: colors.headerBackground,
          }}
        />

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={loginStyles.body}>
             
            <View style={{ flex: 1, marginTop: 90 }}>
            <ScrollView showsVerticalScrollIndicator ={false}>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={ () => navigation.navigate("Home")
                }
              >
                {({ handleChange, handleBlur, handleSubmit, values,errors, touched,
                }) => (
                  <View>
                    <TextInput
                      style={loginStyles.input}
                      labelName="Email"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      autoCapitalize="none"
                      placeholder="Enter Email"
                      left={<TextInput.Icon style={loginStyles.InputIcon}name="email" />}
                    />
                    {errors.email && touched.email ? (
                      <Text style={globalStyles.errorText}>{errors.email}</Text>
                    ) : null}

                    <TextInput
                      style={loginStyles.input}
                      labelName="Password"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      autoCapitalize="none"
                      placeholder="Enter Password"
                      secureTextEntry={true}
                      left={<TextInput.Icon style={loginStyles.InputIcon} name="lock"/> }
                    />
                    {errors.password && touched.password ? (
                      <Text style={globalStyles.errorText}>{errors.password}</Text>
                    ) : null}

                    <Button
                      mode="outlined"
                      onPress={handleSubmit}
                      style={{ width: 120, marginLeft: 66, marginTop: 10 }}
                      color="#04446b"
                    >
                      Login
                    </Button>
                    <Button
                      mode="text"
                      style={{ width: 260, marginTop: 10 }}
                      onPress={() => navigation.navigate("Signup")}
                      color="#04446b"
                      uppercase="false"
                      labelStyle={{ fontSize: 12 }}
                    >
                      Don't have Account ?
                    </Button>
                  </View>
                )}
              </Formik>
              </ScrollView>
            </View>
      
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Container>
  );
}
