import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionScreen from './screens/QuestionScreen';
import LoginScreen from './src/LoginScreen';

function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, tabBarVisible: false}}/>
        <Stack.Screen name="Quiz" component={QuestionScreen} options={{headerShown: true}}/>


// not sure 
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="Login" 
          component={LoginScreen} 
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 40,
//     paddingHorizontal: 16,
//   },
// });
