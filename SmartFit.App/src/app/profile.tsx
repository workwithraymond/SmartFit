import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState} from 'react';


export default function ProfileScreen() {
    const [ fitnessGoal, setFitnessGoal] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    return (
<View style={styles.container}>
    <Text style={styles.title}>Create Your Fitness Profile</Text>
    <Text>Name</Text>
    <TextInput style={styles.input} 
    placeholder="Enter your name"
    value={name}
    onChangeText={setName}
    /> 

    <Text>Age</Text>
    <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
    />
    <Text>Weight</Text>
    <TextInput
        style={styles.input}
        placeholder="Enter your weight in pounds"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
    />
    <Text>Height - Feet</Text>
    <TextInput
        style={styles.input}
        placeholder="Feet"
        keyboardType="numeric"
        value={heightFeet}
        onChangeText={setHeightFeet}
    />

    <Text>Height - Inches</Text>
    <TextInput
        style={styles.input}
        placeholder="Inches"
        keyboardType="numeric"
        value={heightInches}
        onChangeText={setHeightInches}
    />
    <Text>Fitness Goal</Text>
    <View>
  <Pressable style={[styles.goalButton,
    fitnessGoal === 'Lose Fat' && styles.selectedGoalButton
  ]}
   onPress={() => setFitnessGoal('Lose Fat')}>
    <Text>Lose Fat</Text>
  </Pressable>

  <Pressable 
  style={[styles.goalButton,
    fitnessGoal === 'Build Muscle' && styles.selectedGoalButton
  ]}
  onPress={() => setFitnessGoal('Build Muscle')}>
    <Text>Build Muscle</Text>
  </Pressable>

  <Pressable 
  style={[styles.goalButton,
    fitnessGoal === 'Maintain Weight' && styles.selectedGoalButton
  ]}
  onPress={() => setFitnessGoal('Maintain Weight')}>
    <Text>Maintain Weight</Text>
  </Pressable>
  <Text>Selected Goal: {fitnessGoal}</Text>
</View>
   
</View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
       borderWidth: 1, 
       borderColor: '#D1D5DB',
       borderRadius: 8,
       padding: 12,
       marginBottom: 16,
    },
    goalButton: {
        backgroundColor: '#2563EB',
        padding: 14,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
    },
    selectedGoalButton: {
       backgroundColor: '#16A34A',
    },

});
