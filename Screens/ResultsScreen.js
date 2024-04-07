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

let PlantDataBase = [
  ["Snake Plant (Sansevieria)", "description"], // 1

  ["Bird of Paradise (Strelitzia)", "description"], // 2

  ["Ponytail Palm (Beaucarnea recurvata) ", "description"], // 3

  ["Peace Lily (Spathiphyllum)", "description"], // 4

  ["Fiddle Leaf Fig (Ficus lyrata)", "description"], // 5

  ["Rubber Plant (Ficus elastica)", "description"], // 6

  ["ZZ Plant (Zamioculcas zamiifolia)", "description"], // 7

  ["Spider Plant (Chlorophytum comosum) ", "description"], // 8

  ["Cast Iron Plant (Aspidistra elatior)", "description"], // 9

  ["Lavender (Lavandula)", "description"], // 10

  ["Calathea (Calathea spp.)", "description"], // 11

  ["Philodendron (Philodendron spp.)", "description"], // 12

  ["Aloe Vera (Aloe vera)", "description"], // 13

  ["Chamomile (Matricaria chamomilla)", "description"], // 14

  ["Lavender (Lavandula)", "description"], // 15

  ["English Ivy (Hedera helix)", "description"], // 16

  ["Snake Plant (Sansevieria) ", "description"], // 17

  ["Pothos (Epipremnum aureum)", "description"], // 18

  ["Spider Plant (Chlorophytum comosum)", "description"], // 19

  ["Dracaena (Dracaena spp.)", "description"], // 20

  ["Snake Plant (Sansevieria)", "description"], // 21

  ["Areca Palm (Dypsis lutescens) ", "description"], // 22

  ["Bamboo Palm (Chamaedorea elegans)", "description"], // 23

  ["Peace Lily (Spathiphyllum)", "description"], // 26

  ["Succulents (Various species)", "description"], // 27

  ["Snake Plant (Sansevieria)", "description"], // 28

  ["ZZ Plant (Zamioculcas zamiifolia)", "description"], // 29

  ["Boston Fern (Nephrolepis exaltata)", "description"], // 30

  ["Peace Lily (Spathiphyllum)", "description"], // 

  ["Snake Plant (Sansevieria)", "description"] // 30
];

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
    color: 'white',
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  plantDescription: {
    fontSize: 16,
    color: 'white',
  },
});

export default ResultsScreen;
