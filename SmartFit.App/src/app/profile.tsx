import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState} from 'react';
import { generateWorkoutPlan as buildWorkoutPlan } from '../workouts/workoutGenerator';


export default function ProfileScreen() {
  const [currentStep, setCurrentStep] = useState(1);
  const [generatedPlan, setGeneratedPlan] = useState('');


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

const generateWorkoutPlan = () => {
  setGeneratedPlan(buildWorkoutPlan(fitnessProfile));
};


    
    return (

<ScrollView
  style={{ flex: 1, backgroundColor: '#F5F7FC' }}
  contentContainerStyle={styles.container}
>

    <Text style={styles.title}>Create Your Fitness Profile</Text>
    <Text>Step {currentStep} of 9</Text>
    
<View
  style={{
    height: 10,
    backgroundColor: '#DCE4F0',
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 24,
    overflow: 'hidden',
  }}
>
  <View
    style={{
      height: '100%',
      width: `${(currentStep / 9) * 100}%`,
      backgroundColor: '#2563EB',
      borderRadius: 10,
    }}
  />
</View>

     {currentStep === 1 && (
      <View>
        
    <Text style={styles.questionLabel}>Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>
    )}


 {currentStep === 2 && (
  <View>
    
<Text style={styles.questionLabel}>Age</Text>

    <TextInput
      style={styles.input}
      placeholder="Enter your age"
      keyboardType="numeric"
      value={age}
      onChangeText={setAge}
    />
  </View>
)}
   {currentStep === 3 && (
  <View>
    
<Text style={styles.questionLabel}>Weight</Text>

    <TextInput
      style={styles.input}
      placeholder="Enter your weight"
      keyboardType="numeric"
      value={weight}
      onChangeText={setWeight}
    />
  </View>
)}
{currentStep === 4 && (
  <View>
    <Text style={styles.questionLabel}>Height - Feet</Text>
    <TextInput
      style={styles.input}
      placeholder="Feet"
      keyboardType="numeric"
      value={heightFeet}
      onChangeText={setHeightFeet}
    />

    <Text style={styles.questionLabel}>Height - Inches</Text>
    <TextInput
      style={styles.input}
      placeholder="Inches"
      keyboardType="numeric"
      value={heightInches}
      onChangeText={setHeightInches}
    />
  </View>
)}
   {currentStep === 5 && (
  <View>
    

<Text style={styles.questionLabel}>
  How many days per week would you like to be physically active?
</Text>


    <TextInput
      style={styles.input}
      placeholder="Enter days (1-7)"
      keyboardType="numeric"
      value={trainingDays}
      onChangeText={setTrainingDays}
    />
    

<Text>
  Active days can include strength training, cardio, walking, or
  light recovery activities. You do not need to lift weights every day.
</Text>


  </View>
)}
{currentStep === 6 && (
    <View>
    
<Text style={styles.questionLabel}>Fitness Goal</Text>

  <Pressable style={[styles.goalButton,
    fitnessGoal === 'Lose Fat' && styles.selectedGoalButton
  ]}
   onPress={() => setFitnessGoal('Lose Fat')}>
   
<Text style={styles.buttonText}>Lose Fat</Text>

  </Pressable>

  <Pressable 
  style={[styles.goalButton,
    fitnessGoal === 'Build Muscle' && styles.selectedGoalButton
  ]}
  onPress={() => setFitnessGoal('Build Muscle')}>
    
<Text style={styles.buttonText}>Build Muscle</Text>

  </Pressable>

  <Pressable 
  style={[styles.goalButton,
    fitnessGoal === 'Maintain Weight' && styles.selectedGoalButton
  ]}
  onPress={() => setFitnessGoal('Maintain Weight')}>
    
<Text style={styles.buttonText}>Maintain Weight</Text>

  </Pressable>
  <Text>Selected Goal: {fitnessGoal}</Text>
    </View>
)}
{currentStep === 7 && (
  <View>
    
<Text style={styles.questionLabel}>Experience Level</Text>

    {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
    <Pressable
      key={level}
      style={[
        styles.goalButton,
        experienceLevel === level && styles.selectedGoalButton
      ]}
      onPress={() => setExperienceLevel(level)}
    >
      
<Text style={styles.buttonText}>{level}</Text>

    </Pressable>
  ))}
  <Text>Selected Experience: {experienceLevel}</Text>
      </View>
)}
{currentStep === 8 && (
  <View>
  
<Text style={styles.questionLabel}>Workout Location</Text>

  {['Gym', 'Home'].map((location) => (
  <Pressable
    key={location}
    style={[
      styles.goalButton,
      workoutLocation === location && styles.selectedGoalButton
    ]}
    onPress={() => setWorkoutLocation(location)}
  >
    
<Text style={styles.buttonText}>{location}</Text>

  </Pressable>
))}
<Text>Selected Location: {workoutLocation}</Text>

  </View>
)}

{currentStep === 9 && (
  <View>


<Text style={styles.questionLabel}>Activity Level</Text>

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
    
<Text style={styles.buttonText}>{level}</Text>

  </Pressable>
))}
<Text>Selected Activity: {activityLevel}</Text>

  </View>
)}

{currentStep > 1 && (
  <Pressable
    style={styles.backButton}
    onPress={() => setCurrentStep(currentStep - 1)}
  >
<Text style={styles.buttonText}>Back</Text>
  </Pressable>
)}

{currentStep < 9 && (
  <Pressable
    style={styles.goalButton}
    
onPress={() => {
  if (currentStep === 1 && name.trim() === '') {
    alert('Please enter your name before continuing.');
    return;
  }

if (
  currentStep === 2 &&
  (age.trim() === '' ||
    !Number.isInteger(Number(age)) ||
    Number(age) <= 0)
) {
  alert('Please enter a valid age before continuing.');
  return;
}

if (
  currentStep === 3 &&
  (weight.trim() === '' ||
    !Number.isFinite(Number(weight)) ||
    Number(weight) <= 0)
) {
  alert('Please enter a valid weight before continuing.');
  return;
}

if (
  currentStep === 4 &&
  (
    heightFeet.trim() === '' ||
    !Number.isInteger(Number(heightFeet)) ||
    Number(heightFeet) <= 0 ||
    heightInches.trim() === '' ||
    !Number.isInteger(Number(heightInches)) ||
    Number(heightInches) < 0 ||
    Number(heightInches) > 11
  )
) {
  alert('Please enter a valid height in feet and inches.');
  return;
}

if (
  currentStep === 5 &&
  (trainingDays.trim() === '' ||
    !Number.isInteger(Number(trainingDays)) ||
    Number(trainingDays) < 1 ||
    Number(trainingDays) > 7)
) {
  alert('Please enter training days between 1 and 7.');
  return;
}

if (currentStep === 6 && fitnessGoal === '') {
  alert('Please select your fitness goal before continuing.');
  return;
}

if (currentStep === 7 && experienceLevel === '') {
  alert('Please select your experience level before continuing.');
  return;
}

if (currentStep === 8 && workoutLocation === '') {
  alert('Please select your workout location before continuing.');
  return;
}

  setCurrentStep(currentStep + 1);
  
}}

  >  
<Text style={styles.buttonText}>Continue</Text>

  </Pressable>
)}


{currentStep === 9 && (
  <Pressable
    style={styles.goalButton}
   
onPress={() => {
  if (!validateProfile()) return;

  generateWorkoutPlan();
}}

  >
    
<Text style={styles.buttonText}>Generate My Plan</Text>

  </Pressable>
)}

{generatedPlan !== '' && (
  
<View
  style={{
    marginTop: 24,
    backgroundColor: '#EFF6FF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  }}
>
 
<Text style={styles.questionLabel}>
  {name}'s SmartFit Workout Plan
</Text>

<Text style={{ fontSize: 16, color: '#475569', marginBottom: 12 }}>
  Fitness Goal: {fitnessGoal}
</Text>

<Text style={{ fontSize: 16, color: '#475569', marginBottom: 12 }}>
  Experience Level: {experienceLevel}
</Text>

<Text style={{ fontSize: 16, color: '#475569', marginBottom: 12 }}>
  Workout Location: {workoutLocation}
</Text>

<Text style={{ fontSize: 16, color: '#475569', marginBottom: 12 }}>
  Training Days Per Week: {trainingDays}
</Text>

<Text style={{ fontSize: 16, color: '#475569', marginBottom: 12 }}>
  Activity Level: {activityLevel}
</Text>


    <Text style={{ fontSize: 16, lineHeight: 28, color: '#1E293B' }}>
      {generatedPlan}
    </Text>
  </View>
)}



</ScrollView>
    );
}
const styles = StyleSheet.create({
  
container: {
  padding: 24,
  backgroundColor: '#FFFFFF',
  width: '100%',
  maxWidth: 600,
  alignSelf: 'center',
  borderRadius: 16,
  marginTop: 30,
  marginBottom: 30,
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.10,
  shadowRadius: 12,
  elevation: 4,

},


 
title: {
  fontSize: 28,
  fontWeight: 'bold',
  color: '#2563EB',
  textAlign: 'center',
  marginBottom: 20,
},


questionLabel: {
  fontSize: 20,
  fontWeight: '600',
  color: '#1E293B',
  marginBottom: 16,
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
    
    buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    },
    
    backButton: {
    backgroundColor: '#64748B',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
},



});
