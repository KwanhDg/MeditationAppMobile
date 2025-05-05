"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3F414E" />
        </TouchableOpacity>

        <Text style={styles.title}>Welcome Back!</Text>

        <TouchableOpacity style={styles.socialButton}>
          <Image source={require("../assets/images/facebook-icon.png")} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>CONTINUE WITH FACEBOOK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Image source={require("../assets/images/google-icon.png")} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>CONTINUE WITH GOOGLE</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR LOG IN WITH EMAIL</Text>

        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#A1A4B2"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A1A4B2"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.noAccountText}>ALREADY HAVE AN ACCOUNT? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signupText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.indicator} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 10,
    padding: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#3F414E",
    marginBottom: 30,
    textAlign: "center",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7583CA",
    borderRadius: 38,
    paddingVertical: 15,
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EBEAEC",
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  orText: {
    fontSize: 14,
    color: "#A1A4B2",
    textAlign: "center",
    marginVertical: 20,
  },
  input: {
    backgroundColor: "#F2F3F7",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    color: "#3F414E",
  },
  loginButton: {
    backgroundColor: "#8E97FD",
    borderRadius: 38,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#3F414E",
    textAlign: "center",
    marginBottom: 30,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "auto",
  },
  noAccountText: {
    fontSize: 14,
    color: "#A1A4B2",
  },
  signupText: {
    fontSize: 14,
    color: "#8E97FD",
    fontWeight: "500",
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: "#EBEAEC",
    borderRadius: 2,
    alignSelf: "center",
    marginTop: 20,
  },
})

export default SignInScreen
