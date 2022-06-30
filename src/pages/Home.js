import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Felipe </Text>
      <TextInput
        style={styles.input}
        placeholder="New Skills"
        placeholderTextColor="#555"
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}> Add </Text>
      </TouchableOpacity>
      <Text style={[styles.title, {marginTop: 20}]}> My Skills </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1a1e25',
    color: '#fff',
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#a370f0',
    padding: 20,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
