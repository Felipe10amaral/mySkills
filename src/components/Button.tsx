import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps, StyleSheet} from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}

export function Button({title ,...rest}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      {...rest}>
      <Text style={styles.buttonText}> {title} </Text>
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
