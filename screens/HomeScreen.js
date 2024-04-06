import { Button, StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";

function HomeScreen(props) {
  return (
    <View style={styles.container}> 
      <ImageBackground 
        source={require('../assets/backgroundHomeScreen.jpg')}
        resizeMode='fill'
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/bloomLogoHD.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>🌱 Welcome to Bloom! 🌱</Text>
        </View>

        <View style={styles.quizTextContainer}>
          <Text style={styles.quizText}>
            Discover your perfect plant companion based on your personality! Take the quiz and let nature nurture your well-being.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button 
            title="Start Quiz" 
            onPress={() => props.navigation.navigate('Quiz')}
            color="white" // Set button text color to white
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  backgroundImage: {
    flex: 1,
    left: 0,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 130, // Adjust this value as needed
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 50,
    width: '80%', // Set width of the button container
    alignSelf: 'center', // Center the button container horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,  
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 100, 
  },
  welcomeContainer: {
    alignItems: 'center',
    bottom: 400,
  },
  welcomeText: {
    fontSize: 24,
    color: 'black',
  },
  quizTextContainer: {
    alignItems: 'center',
    bottom: 350,
  },
  quizText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default HomeScreen;
