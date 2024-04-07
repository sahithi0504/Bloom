import { Button, StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import {GetQuestionResult, ScoringSystem, getPlantName, getPlantIMG} from '../data/Results.js';



let i = '../assets/plants/lavender.jpg';



function ResultScreen(props) {
ScoringSystem();
let plantname = getPlantName();


return (
  <View style={styles.container}> 
    <ImageBackground 
      source={require('../assets/ResultScreenbg.jpg')}
      resizeMode='fill'
      style={styles.backgroundImage}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require(i)}
          style={styles.imageStyle}
        />
      </View>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>🌱 Your Plant is {plantname}! 🌱</Text>
      </View>

      <View style={styles.quizTextContainer}>
        <Text style={styles.quizText}>
          { getPlantIMG()}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Go back to Home" 
          onPress={() => props.navigation.navigate('Home')}
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
    // 70 to keep both phone look nice
    // 30 to keep joseph phone nice as demo
    paddingBottom: 30, 
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
    color: 'white'
  },
  quizText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});

export default ResultScreen;
