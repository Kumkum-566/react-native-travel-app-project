import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Booking from './screens/Booking';
import DestinationDetails from './screens/DestinationDetails';
import Explore from './screens/Explore';
import TravelTips from './screens/TravelTips';
import WelcomeScreen from './screens/WelcomeScreen';

import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function AuthStack({ registeredUser, onLogin, onRegister }) {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
      >
        {props => (
          <LoginScreen
            {...props}
            onLogin={onLogin}
            registeredUser={registeredUser}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
      >
        {props => (
          <RegistrationScreen
            {...props}
            onRegister={onRegister}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function ExploreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
      <Stack.Screen
        name="DestinationDetails"
        component={DestinationDetails}
        options={({ route }) => ({ title: route.params.destination.name })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({ email: '', password: '' });

  const handleRegistration = (email, password) => {
    setRegisteredUser({ email, password });
    alert('Registration Successful! Please login.');
  };

  const handleLogin = (email, password) => {
    if (email === registeredUser.email && password === registeredUser.password) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid login credentials');
    }
  };

  if (!isLoggedIn) {
    return (
      <NavigationContainer>
        <AuthStack
          registeredUser={registeredUser}
          onLogin={handleLogin}
          onRegister={handleRegistration}
        />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Explore" component={ExploreStack} />
        <Drawer.Screen name="Book a Trip" component={Booking} />
        <Drawer.Screen name="Travel Tips" component={TravelTips} />
        <Drawer.Screen name="About Us" component={AboutUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

