// screens/AboutUs.js

import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60' }}
        style={styles.banner}
        resizeMode="cover"
      />
      <Text style={styles.title}>About TravelZone</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Mission</Text>
        <Text style={styles.cardText}>
          To inspire and enable people to explore the world by providing an easy-to-use travel app that
          combines adventure, comfort, and local experiences.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>What We Offer</Text>
        <Text style={styles.cardText}>
          Discover amazing destinations, book your trips hassle-free, and get expert travel tips all in one place.
          Whether you crave beaches, mountains, or urban adventures — we got you covered.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Why Choose Us?</Text>
        <Text style={styles.cardText}>
          We combine cutting-edge technology with deep travel passion to create a seamless and inspiring
          experience for every traveler.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9faff',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    color: '#0d3b66',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#144d53',
  },
  cardText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});

export default AboutUs;
