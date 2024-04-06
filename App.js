import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QuestionScreen from './Data/QuestionScreen';


export default function App() {
  return (
    <QuestionScreen></QuestionScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
