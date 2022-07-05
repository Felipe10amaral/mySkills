import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function Button() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text style={styles.buttonText}> Add </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
