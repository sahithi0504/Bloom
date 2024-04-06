import { StyleSheet, Text, View } from "react-native";

function QuizScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text>Open up QuizScreen.js to start on your app!</Text>
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
export default QuizScreen;