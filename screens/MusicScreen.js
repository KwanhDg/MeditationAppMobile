// screens/MusicScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MusicScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Music Screen</Text>
    </View>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
