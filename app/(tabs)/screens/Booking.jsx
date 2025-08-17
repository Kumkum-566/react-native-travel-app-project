import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';

class Booking extends Component {
  state = {
    destination: '',
    date: '',
    travelers: '',
    travelClass: '',
    appliedCoupon: '',
  };

  handleBook = () => {
    const { destination, date, travelers, travelClass, appliedCoupon } = this.state;
    if (!destination || !date || !travelers || !travelClass) {
      Alert.alert('Missing Info', 'Please fill all required fields');
      return;
    }
    Alert.alert(
      'Booking Confirmed',
      `Destination: ${destination}\nDate: ${date}\nTravelers: ${travelers}\nClass: ${travelClass}\nCoupon: ${appliedCoupon || 'None'}`
    );
    this.setState({ destination: '', date: '', travelers: '', travelClass: '', appliedCoupon: '' });
  };

  render() {
    const { destination, date, travelers, travelClass, appliedCoupon } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Plan Your Trip</Text>

        <TextInput
          placeholder="Destination"
          value={destination}
          onChangeText={(text) => this.setState({ destination: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Date (YYYY-MM-DD)"
          value={date}
          onChangeText={(text) => this.setState({ date: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Number of Travelers"
          value={travelers}
          onChangeText={(text) => this.setState({ travelers: text })}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Travel Class (Economy/Business)"
          value={travelClass}
          onChangeText={(text) => this.setState({ travelClass: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Coupon Code (Optional)"
          value={appliedCoupon}
          onChangeText={(text) => this.setState({ appliedCoupon: text })}
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <Button title="Book Now" onPress={this.handleBook} color="#1abc9c" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4fcff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#34495e',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default Booking;
