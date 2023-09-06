import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import colors from '../../config/colors';

function WelcomeScreen(props) {
    return (
        <View style={styles.background}>
            <ImageBackground
                style={{ flex: 1 }} 
                source={require('../assets/background.jpg')}>
            
                <View>
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo-red.png')}></Image>

                    <Text style={styles.text}>Sell What You Don't Need</Text>
                </View>
            
                <View style={styles.btnGroup}>
                    <View style={styles.loginBtn} />
                    <View style={styles.registerBtn} />
                </View>
            </ImageBackground> 
        </View>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    logo: {
      height: 100, 
      width: 100, 
      justifyContent: "center",
      alignSelf: "center",
      marginTop: "25%",
    },
    text: {
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
    },
    btnGroup: {
        flex: 1,
        flexDirection: "column", // horizontal
        justifyContent: "flex-end", // main
        alignItems: "baseline", // secondary
    },
    loginBtn: {
        backgroundColor: colors.primary,
        height: 70,
        width: "100%",
    },
    registerBtn: {
        backgroundColor: colors.secondary,
        height: 70,
        width: "100%",
    }
})

export default WelcomeScreen;