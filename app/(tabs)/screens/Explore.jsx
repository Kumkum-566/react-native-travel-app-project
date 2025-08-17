import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const destinations = [
  {
    uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    name: 'Tropical Beach',
  },
  {
    uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    name: 'Mountain Escape',
  },
  {
    uri: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98',
    name: 'City Adventure',
  },
  {
    uri: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470', 
    name: 'Balloon Voyage',
  },
];

const Explore = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Explore Top Destinations</Text>
      {destinations.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.card} 
          onPress={() => navigation.navigate('DestinationDetails', { destination: item })}
        >
          <Image source={{ uri: item.uri }} style={styles.image} />
          <Text style={styles.caption}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eaf6ff',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a5276',
  },
  card: {
    marginBottom: 25,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  caption: {
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#2e86de',
  },
});

export default Explore;
