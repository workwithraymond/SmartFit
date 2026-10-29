import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState} from 'react';


export default function ProfileScreen() {
  const [currentStep, setCurrentStep] = useState(1);


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
  weight: Number(weight),
  heightFeet: Number(heightFeet),
  heightInches: Number(heightInches),
  trainingDays: Number(trainingDays),
  fitnessGoal: fitnessGoal,
  experienceLevel: experienceLevel,
  workoutLocation: workoutLocation,
  activityLevel: activityLevel
};
console.log('SmartFit Profile:', fitnessProfile);
    const validateProfile = () => {
  if (name.trim() === '') {
    alert('Please enter your name.');
    return false;
  }
    if (age.trim() === '' || Number(age) <= 0) {
    alert('Please enter a valid age.');
    return false;
  }
  if (
  weight.trim() === '' ||
  !Number.isFinite(Number(weight)) ||
  Number(weight) <= 0
) {
  alert('Please enter a valid weight.');
  return false;
}
if (
  heightFeet.trim() === '' ||
  !Number.isInteger(Number(heightFeet)) ||
  Number(heightFeet) <= 0
) {
  alert('Please enter a valid height in feet.');
  return false;
}
if (
  heightInches.trim() === '' ||
  !Number.isInteger(Number(heightInches)) ||
  Number(heightInches) < 0 ||
  Number(heightInches) > 11
) {
  alert('Please enter a valid height in inches (0-11).');
  return false;
}
if (
  trainingDays.trim() === '' ||
  !Number.isInteger(Number(trainingDays)) ||
  Number(trainingDays) < 1 ||
  Number(trainingDays) > 7
) {
  alert('Please enter a number of training days between 1 and 7.');
  return false;
}
if (fitnessGoal === '') {
  alert('Please select your fitness goal.');
  return false;
}
if (experienceLevel === '') {
  alert('Please select your experience level.');
  return false;
}

if (workoutLocation === '') {
  alert('Please select your workout location.');
  return false;
}
if (activityLevel === '') {
  alert('Please select your activity level.');
  return false;
}
  return true;
};
    
    return (
<ScrollView style={styles.container}>
    <Text style={styles.title}>Create Your Fitness Profile</Text>
    <Text>Step {currentStep} of 10</Text>
     {currentStep === 1 && (
      <View>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>
    )}


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
  onPress={() => {
    if (!validateProfile()) return;

    alert('Generating a fitness plan for ' + name + ', Age: ' + age + ', Weight: ' + weight + ' lbs');
  }}
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
