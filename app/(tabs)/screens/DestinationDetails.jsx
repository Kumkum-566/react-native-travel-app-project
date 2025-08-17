import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DestinationDetails = ({ route }) => {
  const { destination } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: destination.uri }} style={styles.image} />
      <Text style={styles.name}>{destination.name}</Text>
      <Text style={styles.description}>
        Discover the beauty and excitement of {destination.name}. Plan your trip and enjoy unforgettable experiences!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1a5276',
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default DestinationDetails;
