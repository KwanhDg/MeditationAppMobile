"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("afsar")
  const [email, setEmail] = useState("imshuvo97@gmail.com")
  const [password, setPassword] = useState("••••••••")
  const [agreeToPolicy, setAgreeToPolicy] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3F414E" />
        </TouchableOpacity>

        <Text style={styles.title}>Create your account</Text>

        <TouchableOpacity style={styles.socialButton}>
          <Image source={require("../assets/images/facebook-icon.png")} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>CONTINUE WITH FACEBOOK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Image source={require("../assets/images/google-icon.png")} style={styles.socialIcon} />
          <Text style={[styles.socialButtonText, styles.googleText]}>CONTINUE WITH GOOGLE</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR LOG IN WITH EMAIL</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Name"
            placeholderTextColor="#A1A4B2"
          />
          <AntDesign name="check" size={20} color="#4CAF50" style={styles.checkIcon} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email address"
            placeholderTextColor="#A1A4B2"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <AntDesign name="check" size={20} color="#4CAF50" style={styles.checkIcon} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#A1A4B2"
            secureTextEntry
          />
          <Ionicons name="eye-off" size={20} color="#A1A4B2" style={styles.eyeIcon} />
        </View>

        <View style={styles.policyContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setAgreeToPolicy(!agreeToPolicy)}>
            {agreeToPolicy && <AntDesign name="check" size={16} color="#8E97FD" />}
          </TouchableOpacity>
          <Text style={styles.policyText}>
            I have read the <Text style={styles.policyLink}>Privacy Policy</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate("Onboarding")}>
          <Text style={styles.getStartedButtonText}>GET STARTED</Text>
        </TouchableOpacity>

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
  googleText: {
    color: "#3F414E",
  },
  orText: {
    fontSize: 14,
    color: "#A1A4B2",
    textAlign: "center",
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F7",
    borderRadius: 15,
    marginBottom: 20,
    paddingRight: 15,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: "#3F414E",
  },
  checkIcon: {
    marginLeft: 10,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  policyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#A1A4B2",
    borderRadius: 4,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  policyText: {
    fontSize: 14,
    color: "#A1A4B2",
  },
  policyLink: {
    color: "#8E97FD",
  },
  getStartedButton: {
    backgroundColor: "#8E97FD",
    borderRadius: 38,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  getStartedButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: "#EBEAEC",
    borderRadius: 2,
    alignSelf: "center",
    marginTop: "auto",
  },
})

export default SignUpScreen
