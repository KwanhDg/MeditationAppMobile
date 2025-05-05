import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Sử dụng từ react-native-safe-area-context

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Silent</Text>
          <Image source={require("../assets/images/moon-logo.png")} style={styles.logo} />
          <Text style={styles.logoText}>Moon</Text>
        </View>

        <Image
          source={require("../assets/images/welcome-illustration.png")}
          style={styles.illustration}
          resizeMode="contain"
        />

        <Text style={styles.title}>We are what we do</Text>
        <Text style={styles.subtitle}>
          Thousands of people are using Silent Moon for small meditation
        </Text>

        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.loginText}>
            ALREADY HAVE AN ACCOUNT? <Text style={styles.loginLink}>LOG IN</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.indicator} />
      </View>
    </SafeAreaView>
  );
};

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
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center", // Đảm bảo căn giữa nội dung
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3F414E",
  },
  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  illustration: {
    width: "80%", // Giảm width để tránh tràn trên màn hình nhỏ
    height: 250,
    resizeMode: "contain",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#3F414E",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#A1A4B2",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 20, // Thêm padding để tránh văn bản bị cắt
  },
  signUpButton: {
    backgroundColor: "#8E97FD",
    borderRadius: 38,
    paddingVertical: 15,
    width: "80%", // Giảm width để cân đối
    alignItems: "center",
    marginBottom: 20,
  },
  signUpButtonText: {
    color: "white",
    fontSize: 16, // Tăng fontSize để dễ đọc hơn
    fontWeight: "700",
  },
  loginText: {
    fontSize: 14,
    color: "#A1A4B2",
    marginBottom: 20,
    textAlign: "center",
  },
  loginLink: {
    color: "#8E97FD",
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: "#EBEAEC",
    borderRadius: 2,
    marginTop: "auto",
    marginBottom: 10,
  },
});

export default WelcomeScreen;