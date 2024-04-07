import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionScreen from './screens/QuestionScreen';
import ResultsScreen from "./screens/ResultsScreen";

function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

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
            headerShown: true
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
