import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';

type HelpScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Help'>;
};

export default function HelpScreen({navigation}: HelpScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Help & FAQ</Text>
        <Text style={styles.subtitle}>Developer 3's Screen</Text>

        <View style={styles.faqItem}>
          <Text style={styles.question}>Q: How do I start an exercise?</Text>
          <Text style={styles.answer}>
            A: Navigate to the Search screen and select any exercise from the
            list. Click on it to view details and start. 
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.question}>Q: Can I track my progress?</Text>
          <Text style={styles.answer}>
            A: Yes! Visit your Profile to see your progress and achievements.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles. question}>Q: How do I change settings?</Text>
          <Text style={styles.answer}>
            A: Go to the Settings screen from the home page to customize your
            preferences.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.question}>Q: Is this app free?</Text>
          <Text style={styles.answer}>
            A: Yes, this app is completely free to use with all features
            unlocked.
          </Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.contactTitle}>Need More Help?</Text>
          <Text style={styles.contactText}>
            Contact us at:  support@dyslexiaapp.com
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>← Back to Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:  1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color:  '#666',
    marginBottom:  30,
  },
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding:  15,
    marginBottom:  15,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom:  10,
  },
  answer:  {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  contactBox: {
    backgroundColor: '#e3f2fd',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1976d2',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 14,
    color: '#1976d2',
  },
  button: {
    backgroundColor:  '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});