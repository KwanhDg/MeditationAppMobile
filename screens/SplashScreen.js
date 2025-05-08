import react from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from "react-native"
//import { styles } from "./styles";

export const SplashScreen = ({navigation}) =>{
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.bg} source={require('../assets/images/bg1.png')} />
            <View style={styles.contentContainer}>
                <View style={styles.top}>
                <Image
                 style={styles.logo} 
                 source={require('../assets/images/logo.png')} 
                />
                <Image
                 style={styles.welcomeImage} 
                 source={require('../assets/images/enjoy.png')} 
                />
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.heading}>We are what we do</Text>
                    <Text style={styles.subHeading}>Thousand of people are usign silent moon for smalls meditation</Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn}>
                            <Text
                            style={styles.btnLabel}
                            onPress={() => navigation.navigate('SignUp')}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.loginLinkWrapper}><Text style={styles.notificationContent}>ALREADY HAVE AN ACCOUNT?</Text> <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('Login')}>LOG IN</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flex: 1,
    },
    bg: {
        position: 'absolute',
    },
    contentContainer: {
        flex: 1,
        padding: 20,
        marginTop: 30,
       
    },
    logo: {
        alignSelf: 'center',
    },
    welcomeImage: {
        marginTop: 50,
        marginLeft: 20
    },
    top: {
        flex: 1,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    heading: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 41,
        textAlign: 'center',
        color: '#3F414E',
    },
    subHeading: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        color: '#A1A4B2',
        
    },
    btnContainer: {
        display: 'flex',
        marginTop: 60,
    },
    btn: {
        backgroundColor: '#8E97FD',
        borderRadius: 38,
    },
    btnLabel: {
        fontFamily: 'HelveticaNeue',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        color: '#F6F1FB',
        padding: 20,
    },
    loginLinkWrapper: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 90,
    },
    notificationContent: {
        color: '#A1A4B2',
        fontSize: 14,
        fontFamily: 'HelveticaNeue',
    },
    link: {
        color: '#8E97FD',
        fontSize: 14,
        fontFamily: 'HelveticaNeue',
    },
    });
