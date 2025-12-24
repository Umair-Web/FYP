import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import screens
import {HomeScreen, ProfileScreen} from '../screens/Developer1';
import {SearchScreen, DetailsScreen} from '../screens/Developer2';
import {SettingsScreen, HelpScreen} from '../screens/Developer3';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Search:  undefined;
  Details: {itemId: string};
  Settings:  undefined;
  Help: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {/* Developer 1's screens */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Dyslexia App'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />

        {/* Developer 2's screens */}
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />

        {/* Developer 3's screens */}
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}