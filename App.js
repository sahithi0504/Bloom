// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";

import { Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, tabBarVisible: false}}/>
        <Stack.Screen name="Quiz" component={QuizScreen} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;