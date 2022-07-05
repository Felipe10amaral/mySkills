import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface NameSkill extends TouchableOpacityProps {
  skill: string;
}
export function CardSkill({skill, ...rest}: NameSkill) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.TextSkills}>
      <Text style={styles.skills} {...rest}> {skill} </Text>
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
