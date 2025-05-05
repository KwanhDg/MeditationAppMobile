"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native"
import { Feather } from "@expo/vector-icons"

const PlayerScreen = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0.033) // 1:30 of 45:00

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Feather name="x" size={24} color="#3F414E" />
        </TouchableOpacity>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="heart" size={24} color="#A0A3B1" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="download" size={24} color="#A0A3B1" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Focus Attention</Text>
          <Text style={styles.subtitle}>7 DAYS OF CALM</Text>

          <View style={styles.controlsContainer}>
            <TouchableOpacity style={styles.controlButton}>
              <Feather name="rotate-ccw" size={24} color="#3F414E" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.playPauseButton} onPress={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? (
                <Feather name="pause" size={30} color="white" />
              ) : (
                <Feather name="play" size={30} color="white" />
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.controlButton}>
              <Feather name="rotate-cw" size={24} color="#3F414E" />
            </TouchableOpacity>
          </View>

          <View style={styles.progressContainer}>
            {/* Custom progress bar instead of Slider */}
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>01:30</Text>
              <Text style={styles.timeText}>45:00</Text>
            </View>
          </View>
        </View>
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
    backgroundColor: "#FAF8F5",
    borderRadius: 20,
    margin: 10,
    padding: 20,
  },
  closeButton: {
    alignSelf: "flex-start",
  },
  actionButtons: {
    flexDirection: "row",
    position: "absolute",
    top: 20,
    right: 20,
  },
  actionButton: {
    marginLeft: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#3F414E",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#A0A3B1",
    marginBottom: 60,
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  controlButton: {
    marginHorizontal: 30,
  },
  playPauseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#3F414E",
    alignItems: "center",
    justifyContent: "center",
  },
  progressContainer: {
    width: "100%",
  },
  progressBarContainer: {
    width: "100%",
    height: 4,
    backgroundColor: "#E5E5E5",
    borderRadius: 2,
    marginBottom: 10,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#3F414E",
    borderRadius: 2,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeText: {
    fontSize: 14,
    color: "#A0A3B1",
  },
})

export default PlayerScreen
