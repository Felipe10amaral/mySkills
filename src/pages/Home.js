import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Button} from '../components/Button';
import {CardSkill} from '../components/CardSkill';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(skill => [...skill, newSkill]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Felipe </Text>
      <TextInput
        style={styles.input}
        placeholder="New Skills"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button />
      <Text style={[styles.title, {marginVertical: 50}]}> My Skills </Text>
      {mySkills.map(skill => (
        <CardSkill />
      ))}
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
});
