import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const QuestionScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndices, setSelectedOptionIndices] = useState(Array(10).fill(null)); // State to track selected option indices for each question
  const questions = [
    {
      question: "How would you describe your energy levels throughout the day?",
      options: ["High energy all day long", "Energy peaks and valleys", "Low energy most of the time"]
    },
    {
      question: "What type of environment do you feel most comfortable in?",
      options: ["Busy and bustling", "Calm and peaceful", "Doesn't matter, I adapt easily"]
    },
    {
      question: "How do you typically cope with stress?",
      options: ["Exercise or physical activity", "Meditation or mindfulness practices", "Spending time outdoors"]
    },
    {
      question: "What's your favorite way to unwind after a long day?",
      options: ["Watching TV or movies", "Reading a book or listening to music", "Engaging in a hobby or creative activity"]
    },
    {
      question: "How much natural light does your living space receive?",
      options: ["Lots of direct sunlight", "Some sunlight filtered through windows", "Minimal natural light"]
    },
    {
      question: "Do you have any allergies to plants or pollen?",
      options: ["No allergies", "Mild allergies (e.g., seasonal allergies)", "Severe allergies (e.g., allergic reactions to specific plants)"]
    },
    {
      question: "How much time are you willing to dedicate to plant care?",
      options: ["I enjoy spending time caring for plants regularly", "I can dedicate some time but prefer low-maintenance plants", "I prefer plants that require minimal care and attention"]
    },
    {
      question: "What's your favorite color palette for home decor?",
      options: ["Bright and vibrant colors", "Earthy tones and natural hues", "Cool and calming shades"]
    },
    {
      question: "How important is air quality in your living environment?",
      options: ["Very important, I prioritize clean air", "Somewhat important, but not a top priority", "Not important, I don't pay much attention to air quality"]
    },
    {
      question: "Do you have any specific health concerns or conditions?",
      options: ["No specific health concerns", "Stress or anxiety-related issues", "Respiratory conditions (e.g., asthma, allergies)", "Other (please specify)"]
    }
  ];

  const handleNextQuestion = () => {
    // Check if it's not the last question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleOptionSelect = (optionIndex) => {
    const updatedSelectedOptionIndices = [...selectedOptionIndices];
    updatedSelectedOptionIndices[currentQuestionIndex] = optionIndex;
    setSelectedOptionIndices(updatedSelectedOptionIndices);
    handleNextQuestion(); // Automatically move to the next question after selecting an option
  };

  const renderOptions = () => {
    return questions[currentQuestionIndex].options.map((option, index) => (
      <View key={index} style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOptionIndices[currentQuestionIndex] === index && styles.selectedOption, // Apply selected style if index matches
          ]}
          onPress={() => handleOptionSelect(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <View style={styles.container}>
      <View style={styles.questionNumberContainer}>
        <Text style={styles.questionNumberText}>Question {currentQuestionIndex + 1}/{questions.length}</Text>
      </View>
      <View style={styles.dottedLine} />
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {renderOptions()}
      </View>
      <View style={styles.buttonContainer}>
        { currentQuestionIndex > 0 && (
        <TouchableOpacity
          style={[styles.button, styles.previousButton]}
          onPress={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <Text style={styles.buttonText}><AntDesign name="leftcircleo" size={40} color="black" /></Text>
        </TouchableOpacity>
        )}
        {currentQuestionIndex < questions.length - 1 && (
        <TouchableOpacity
          style={[styles.button, styles.nextButton]}
          onPress={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          <Text style={styles.buttonText}><AntDesign name="rightcircleo" size={40} color="black" /></Text>
        </TouchableOpacity>
        )}
        {isLastQuestion && (
          <TouchableOpacity
            style={[styles.button, styles.resultButton]}
            onPress={() => navigation.navigate('Result')} // Navigate to ResultsScreen on last question
          >
            <Text style={styles.buttonText}>View Results</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bfd9be',
    padding: 20,
  },
  questionNumberContainer: {
    marginBottom: 10,
  },
  questionNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dottedLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionContainer: {
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  selectedOption: {
    backgroundColor: '#20b2aa', // Change to your selected option color
  },
  optionText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  resultButton: {
    backgroundColor: '#20b2aa', // Change to your desired color
  },
});

export default QuestionScreen;
