import { Button, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Modal } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

function HomeScreen(props) {

  const [modalVisible, setModalVisible] = useState(false);

  return (

    <View style={styles.container}> 
      <ImageBackground 
        source={require('../assets/backgroundHomeScreen.jpg')}
        resizeMode='stretch'
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
            Where Mental Health Meets Nature Healing Touch
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <MaterialIcons name="info-outline" size={30} color="black"/>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => props.navigation.navigate('Quiz')}
        >
          <Text style={styles.buttonText}>
            Let's Bloom! 🌸
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setModalVisible(true)}
        >
          <MaterialIcons name="info-outline" size={30} color="black"/>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Discover your perfect plant companion based on your personality! Take the quiz and let nature nurture your well-being.
                </Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '80%', // Set width of the button container
    alignSelf: 'center', // Center the button container horizontally
    backgroundColor: 'rgba(53, 161, 99, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold', // Make the text bold
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
  },
  quizText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  iconContainer: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: 50,
    paddingVertical: 50,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'rgba(53, 161, 99, 1)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    bottom: -20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HomeScreen;
