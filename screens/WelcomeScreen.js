import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { styles } from './styles';

export const Welcome = ({ route, navigation }) => {
  const [userName, setUserName] = useState('');

  // Lấy userName từ params hoặc AsyncStorage
  useEffect(() => {
    const getUserName = async () => {
      try {
        // Ưu tiên lấy từ route.params
        if (route.params?.userName) {
          setUserName(route.params.userName);
          return;
        }
        // Nếu không có params, lấy từ AsyncStorage
        const currentUser = await AsyncStorage.getItem('currentUser');
        if (currentUser) {
          const userData = JSON.parse(currentUser);
          setUserName(userData.userName);
        }
      } catch (error) {
        console.error('Error reading currentUser:', error);
      }
    };
    getUserName();
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logoImage} source={require('../assets/images/moon-logo-white.png')} />
      </View>
      <View style={styles.welcomeMessage}>
        <Text style={styles.heading}>Hi {userName || 'Afsar'}, Welcome</Text>
        <Text style={styles.subHeading}>to Silent Moon</Text>
        <Text style={styles.description}>
          Explore the app, Find some peace of mind to prepare for meditation.
        </Text>
      </View>
      <View style={styles.welcomeimageWrapper}>
        <Image style={styles.yoga} source={require('../assets/images/welcomeBg.png')} />
      </View>
      <View style={styles.bgBtn}></View>
      <View style={styles.bgWrapper}>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnStarted}>
            <Text style={styles.btnStartedLabel}
            onPress={() => navigation.navigate('Topic')}
            >GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#8E97FD',
  },
  logoWrapper: {
    marginTop: 30,
  },
  logoImage: {
    alignSelf: 'center',
  },
  welcomeMessage: {
    marginTop: 75,
  },
  heading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 30,
    color: '#EBEAEC',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 30,
    color: '#EBEAEC',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'ultralight',
  },
  description: {
    textAlign: 'center',
    color: '#EBEAEC',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
    lineHeight: 20,
  },
  welcomeImageWrapper: {
    position: 'absolute',
    bottom: '5%',
  },
  yoga: {
    position: 'absolute',
    top: '11%',
    alignSelf: 'center',
  },
  btnContainer: {
    marginTop: 30,
  },
  btnStarted: {
    borderRadius: 38,
    flexDirection: 'row',
    backgroundColor: '#EBEAEC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStartedLabel: {
    fontFamily: 'HelveticaNeue',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    padding: 20,
    alignSelf: 'center',
    color: '#3F414E',
  },
  bgWrapper: {
    position: 'absolute',
    bottom: '10%',
    width: '90%',
    alignSelf: 'center',
  },
  bgBtn: {
    //backgroundColor: '#8C96FF',
    height: '35%',
    bottom: 0,
    width: '120%',
    position: 'absolute',
  },
});

