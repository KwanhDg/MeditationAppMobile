import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const OnboardingScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#8E97FD", "#7583CA"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Silent</Text>
            <Image source={require("../assets/images/moon-logo-white.png")} style={styles.logo} />
            <Text style={styles.logoText}>Moon</Text>
          </View>

          <Text style={styles.welcomeText}>Hi Afsar, Welcome</Text>
          <Text style={styles.subtitleText}>to Silent Moon</Text>

          <Text style={styles.descriptionText}>
            Explore the app. Find some peace of mind to prepare for meditation.
          </Text>

          <Image source={require("../assets/images/meditation-illustration.png")} style={styles.illustration} />

          <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate("Topic")}>
            <Text style={styles.getStartedButtonText}>GET STARTED</Text>
          </TouchableOpacity>

          <View style={styles.indicator} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  logoText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 30,
    fontWeight: "300",
    color: "white",
    textAlign: "center",
    marginBottom: 15,
  },
  descriptionText: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    marginBottom: 30,
  },
  illustration: {
    width: "80%",
    height: 250,
    resizeMode: "contain",
    marginVertical: 20,
  },
  getStartedButton: {
    backgroundColor: "white",
    borderRadius: 38,
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
  },
  getStartedButtonText: {
    color: "#8E97FD",
    fontSize: 14,
    fontWeight: "700",
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 2,
    marginBottom: 10,
  },
})

export default OnboardingScreen
