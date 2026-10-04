import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState} from 'react';


export default function ProfileScreen() {
    const [ fitnessGoal, setFitnessGoal] = useState('');
    return (
<View style={styles.container}>
    <Text style={styles.title}>Create Your Fitness Profile</Text>
    <Text>Name</Text>
    <TextInput style={styles.input} 
    placeholder="Enter your name"
    /> 

    <Text>Age</Text>
    <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
    />
    <Text>Weight</Text>
    <TextInput
        style={styles.input}
        placeholder="Enter your weight in pounds"
        keyboardType="numeric"
    />
    <Text>Height - Feet</Text>
    <TextInput
        style={styles.input}
        placeholder="Feet"
        keyboardType="numeric"
    />

    <Text>Height - Inches</Text>
    <TextInput
        style={styles.input}
        placeholder="Inches"
        keyboardType="numeric"
    />
    <Text>Fitness Goal</Text>
    <View>
  <Pressable onPress={() => setFitnessGoal('Lose Fat')}>
    <Text>Lose Fat</Text>
  </Pressable>
<Text>Selected Goal: {fitnessGoal}</Text>
  <Pressable onPress={() => setFitnessGoal('Build Muscle')}>
    <Text>Build Muscle</Text>
  </Pressable>

  <Pressable onPress={() => setFitnessGoal('Maintain Weight')}>
    <Text>Maintain Weight</Text>
  </Pressable>
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
    }
});
