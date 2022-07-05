import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button} from '../components/Button';
import {CardSkill} from '../components/CardSkill';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);

  function handleAddNewSkill() {

    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    setMySkills(skill => [...skill, data]);
  } 

  function handleRemoveSkill(id: string) {
    setMySkills( oldState => oldState.filter(
      skill => skill.id !== id
    ));
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
      <Button onPress={handleAddNewSkill} activeOpacity={0.7} title="Adicionar"/>
      <Text style={[styles.title, {marginVertical: 50}]}> My Skills </Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CardSkill skill={item.name}
        onPress={() => handleRemoveSkill(item.id)} />}
      />
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
