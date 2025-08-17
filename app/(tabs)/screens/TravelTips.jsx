import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const tips = [
  { icon: '✈️', text: 'Book flights early to save money and get the best seats.' },
  { icon: '🧳', text: 'Pack light and bring only the essentials.' },
  { icon: '🏨', text: 'Always double-check your hotel and tour reservations.' },
  { icon: '💳', text: 'Carry a backup credit/debit card in case of emergency.' },
  { icon: '🌍', text: 'Learn a few local phrases; it helps in many situations.' },
  { icon: '📱', text: 'Download offline maps and important travel apps.' },
  { icon: '💊', text: 'Pack basic medication and a first-aid kit.' },
  { icon: '🕒', text: 'Arrive at the airport at least 2 hours before your flight.' },
];

const TravelTips = () => {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>✈️ Travel Tips</Text>
        {tips.map((tip, index) => (
          <View key={index} style={styles.tipCard}>
            <Text style={styles.tipIcon}>{tip.icon}</Text>
            <Text style={styles.tipText}>{tip.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Safe Travels! ✈️🌍</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5faff',
  },
  container: {
    padding: 20,
    paddingBottom: 80,  
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#05668d',
  },
  tipCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  tipIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  tipText: {
    fontSize: 16,
    flex: 1,
    color: '#333',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#028090',
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TravelTips;
