import { Button, StyleSheet, Text, View } from "react-native";

// props is an object that contains the properties passed to the component (can remove later i think)
function HomeScreen(props) {
  console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text>Open up HomeScreen.js to start on your app!</Text>
      <Button title="Start Quiz" onPress={() => props.navigation.navigate('Quiz')}/>
    </View>
  );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: "#f0f",
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        fontSize: 20,
    },
    headingStyle: {
        fontSize: 30,
    },
});
export default HomeScreen;