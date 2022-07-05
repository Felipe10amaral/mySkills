import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function CardSkill({skill}) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.TextSkills}>
      <Text style={styles.skills}> {skill} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  TextSkills: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: '#1a1e25',
    alignItems: 'center',
    marginBottom: 5,
  },
  skills: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
