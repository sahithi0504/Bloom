import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionScreen from './screens/QuestionScreen';
<<<<<<< HEAD
import ResultsScreen1 from './screens/ResultsScreen1';
import ResultsScreen2 from './screens/ResultsScreen2';
import ResultsScreen3 from './screens/ResultsScreen3';
import ResultsScreen4 from './screens/ResultsScreen4';
import ResultsScreen5 from './screens/ResultsScreen5';
import ResultsScreen6 from './screens/ResultsScreen6';
import ResultsScreen7 from './screens/ResultsScreen7';
import ResultsScreen8 from './screens/ResultsScreen8';
import ResultsScreen9 from './screens/ResultsScreen9';
import ResultsScreen10 from './screens/ResultsScreen10';
import ResultsScreen11 from './screens/ResultsScreen11';
import ResultsScreen12 from './screens/ResultsScreen12';
import ResultsScreen13 from './screens/ResultsScreen13';
import ResultsScreen14 from './screens/ResultsScreen14';
import ResultsScreen15 from './screens/ResultsScreen15';
import ResultsScreen16 from './screens/ResultsScreen16';
import ResultsScreen17 from './screens/ResultsScreen17';
import ResultsScreen18 from './screens/ResultsScreen18';
import ResultsScreen19 from './screens/ResultsScreen19';
import ResultsScreen20 from './screens/ResultsScreen20';
import ResultsScreen21 from './screens/ResultsScreen21';
=======
import ResultsScreen from "./screens/ResultsScreen";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
>>>>>>> 10c4b95d38276b672e8bb9db6beb20c7cc548805

function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
<<<<<<< HEAD
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, tabBarVisible: false}}/>
        <Stack.Screen name="Quiz" component={QuestionScreen} options={{headerShown: true}}/>
      
        <Stack.Screen name="Result1" component={ResultsScreen1} options={{headerShown: true}}/>
        <Stack.Screen name="Result2" component={ResultsScreen2} options={{headerShown: true}}/>
        <Stack.Screen name="Result3" component={ResultsScreen3} options={{headerShown: true}}/>
        <Stack.Screen name="Result4" component={ResultsScreen4} options={{headerShown: true}}/>
        <Stack.Screen name="Result5" component={ResultsScreen5} options={{headerShown: true}}/>
        <Stack.Screen name="Result6" component={ResultsScreen6} options={{headerShown: true}}/>
        <Stack.Screen name="Result7" component={ResultsScreen7} options={{headerShown: true}}/>
        <Stack.Screen name="Result8" component={ResultsScreen8} options={{headerShown: true}}/>
        <Stack.Screen name="Result9" component={ResultsScreen9} options={{headerShown: true}}/>
        <Stack.Screen name="Result10" component={ResultsScreen10} options={{headerShown: true}}/>
        <Stack.Screen name="Result11" component={ResultsScreen11} options={{headerShown: true}}/>
        <Stack.Screen name="Result12" component={ResultsScreen12} options={{headerShown: true}}/>
        <Stack.Screen name="Result13" component={ResultsScreen13} options={{headerShown: true}}/>
        <Stack.Screen name="Result14" component={ResultsScreen14} options={{headerShown: true}}/>
        <Stack.Screen name="Result15" component={ResultsScreen15} options={{headerShown: true}}/>
        <Stack.Screen name="Result16" component={ResultsScreen16} options={{headerShown: true}}/>
        <Stack.Screen name="Result17" component={ResultsScreen17} options={{headerShown: true}}/>
        <Stack.Screen name="Result18" component={ResultsScreen18} options={{headerShown: true}}/>
        <Stack.Screen name="Result19" component={ResultsScreen19} options={{headerShown: true}}/>
        <Stack.Screen name="Result20" component={ResultsScreen20} options={{headerShown: true}}/>
        <Stack.Screen name="Result21" component={ResultsScreen21} options={{headerShown: true}}/>
=======

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{headerShown: false, tabBarVisible: false}}
        />

        <Stack.Screen 
          name="Quiz" 
          component={QuestionScreen} 
          options={{
            headerShown: true,
            headerTitle: "Personality Quiz",
            headerStyle: {
              backgroundColor: "#bfd9be",
              headerStatusBarHeight: 100,
            },
            headerTitleStyle: {fontSize: 24},
          }}
        />

        <Stack.Screen 
          name="Result" 
          component={ResultsScreen} 
          options={{
            headerShown: true,
          }}
        />
>>>>>>> 10c4b95d38276b672e8bb9db6beb20c7cc548805
      </Stack.Navigator>
    </NavigationContainer>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 10c4b95d38276b672e8bb9db6beb20c7cc548805
