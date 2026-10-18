import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState} from 'react';


export default function ProfileScreen() {
    const [ fitnessGoal, setFitnessGoal] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [trainingDays, setTrainingDays] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const [workoutLocation, setWorkoutLocation] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
    const fitnessProfile = {
  name: name,
  age: Number(age),
  weight: weight,
  heightFeet: heightFeet,
  heightInches: heightInches,
  trainingDays: trainingDays,
  fitnessGoal: fitnessGoal,
  experienceLevel: experienceLevel,
  workoutLocation: workoutLocation,
  activityLevel: activityLevel
};
console.log('SmartFit Profile:', fitnessProfile);
    return (
<ScrollView style={styles.container}>
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
    <Text>Training Days Per Week</Text>
    <TextInput
        style={styles.input}
        placeholder="Enter days (1-7)"
        keyboardType="numeric"
        value={trainingDays}
        onChangeText={setTrainingDays}
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
  <Text>Experience Level</Text>
  <View>
  {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
    <Pressable
      key={level}
      style={[
        styles.goalButton,
        experienceLevel === level && styles.selectedGoalButton
      ]}
      onPress={() => setExperienceLevel(level)}
    >
      <Text>{level}</Text>
    </Pressable>
  ))}
  <Text>Selected Experience: {experienceLevel}</Text>
  <Text>Workout Location</Text>
  {['Gym', 'Home'].map((location) => (
  <Pressable
    key={location}
    style={[
      styles.goalButton,
      workoutLocation === location && styles.selectedGoalButton
    ]}
    onPress={() => setWorkoutLocation(location)}
  >
    <Text>{location}</Text>
  </Pressable>
))}
<Text>Selected Location: {workoutLocation}</Text>
<Text>Activity Level</Text>
{[
  'Sedentary',
  'Lightly Active',
  'Moderately Active',
  'Very Active'
].map((level) => (
  <Pressable
    key={level}
    style={[
      styles.goalButton,
      activityLevel === level && styles.selectedGoalButton
    ]}
    onPress={() => setActivityLevel(level)}
  >
    <Text>{level}</Text>
  </Pressable>
))}
<Text>Selected Activity: {activityLevel}</Text>
<Pressable
  style={styles.goalButton}
  onPress={() => alert('Generating a fitness plan for ' + name + ', Age: ' + age + ', Weight: ' + weight + ' lbs')}
>
  <Text>Generate My Plan</Text>
</Pressable>
</View>
</View>
   
</ScrollView>
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
