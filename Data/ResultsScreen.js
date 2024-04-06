import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const ResultsScreen = () => {
  const [recommendedPlants, setRecommendedPlants] = useState([]);

  useEffect(() => {
    // Fetch recommended plants or calculate them based on user responses
    // Update the recommendedPlants state variable with the actual recommendations
    // Example: setRecommendedPlants([...]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recommended Plants</Text>
      {recommendedPlants.length === 0 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        recommendedPlants.map((plant, index) => (
          <PlantCard key={index} plant={plant} />
        ))
      )}
    </View>
  );
};

const PlantCard = ({ plant }) => {
  return (
    <View style={styles.plantContainer}>
      <Text style={styles.plantName}>{plant.name}</Text>
      <Text style={styles.plantDescription}>{plant.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  plantContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  plantDescription: {
    fontSize: 16,
  },
});

export default ResultsScreen;
