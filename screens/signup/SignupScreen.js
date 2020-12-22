import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Text,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, useTheme } from "react-native-paper";
import { globalStyles } from "../../components/globalstyle/globalStyle";
import signupStyles from "./SignupStyle";
import Box from "../../components/box/Box";
import Container from "../../components/container/Container";

const loginSchema = yup.object().shape({
  name : yup.string().required(),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    confirmPassword: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function Signup({ navigation }) {
  const { colors } = useTheme();

  return (
    <Container>
      <Box titletext="SIGNUP"/>
      <View style={signupStyles.header}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: colors.headerBackground,
          }}
        />

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={signupStyles.body}>
            <View style={{ flex: 1, marginTop: 40 }}>
              <ScrollView showsVerticalScrollIndicator ={false}>
                <Formik
                  initialValues={{ name: "", email: "" , password: "" , confirmPassword: "" }}
                  validationSchema={loginSchema}
                  onSubmit={() => navigation.navigate("Login")}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                  }) => (
                    <View>
                      <TextInput
                        style={signupStyles.input}
                        labelName="Name"
                        onChangeText={handleChange("name")}
                        onBlur={handleBlur("name")}
                        value={values.name}
                        autoCapitalize="none"
                        placeholder="Enter name"
                        left={
                          <TextInput.Icon
                            style={signupStyles.InputIcon}
                            name="name"
                          />
                        }
                      />
                      {errors.name && touched.name ? (
                        <Text style={globalStyles.errorText}>
                          {errors.name}
                        </Text>
                      ) : null}

                      <TextInput
                        style={signupStyles.input}
                        labelName="Email"
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        autoCapitalize="none"
                        placeholder="Enter Email"
                        left={
                          <TextInput.Icon
                            style={signupStyles.InputIcon}
                            name="email"
                          />
                        }
                      />
                      {errors.email && touched.email ? (
                        <Text style={globalStyles.errorText}>
                          {errors.email}
                        </Text>
                      ) : null}

                      <TextInput
                        style={signupStyles.input}
                        labelName="Password"
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        autoCapitalize="none"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        left={
                          <TextInput.Icon
                            style={signupStyles.InputIcon}
                            name="lock"
                          />
                        }
                      />
                      {errors.password && touched.password ? (
                        <Text style={globalStyles.errorText}>
                          {errors.password}
                        </Text>
                      ) : null}

                      <TextInput
                        style={signupStyles.input}
                        labelName="Confirm Password"
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                        value={values.confirmPassword}
                        autoCapitalize="none"
                        placeholder="Enter confirmPassword"
                        secureTextEntry={true}
                        left={
                          <TextInput.Icon
                            style={signupStyles.InputIcon}
                            name="lock"
                          />
                        }
                      />
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <Text style={globalStyles.errorText}>
                          {errors.confirmPassword}
                        </Text>
                      ) : null}

                      <Button
                        mode="outlined"
                        onPress={handleSubmit}
                        style={{ width: 120, marginLeft: 66, marginTop: 10 }}
                        color="#04446b"
                      >
                        Sign Up
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
