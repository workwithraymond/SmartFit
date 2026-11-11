import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState} from 'react';


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
  
const days = fitnessProfile.trainingDays;
  
const experience = fitnessProfile.experienceLevel;


const goal = fitnessProfile.fitnessGoal;


const location = fitnessProfile.workoutLocation;


if (days === 1 && goal === 'Lose Fat') {
    setGeneratedPlan(
      'Your 1-Day Fat Loss Workout Plan:\n\n' +
      'Monday: Full Body and Cardio\n' +
      '• Bodyweight Squats: 2 sets x 12 reps\n' +
      '• Glute Bridges: 2 sets x 12 reps\n' +
      '• Standing Calf Raises: 2 sets x 15 reps\n' +
      '• Brisk Walking: 15-20 minutes\n\n' +
      'Tuesday - Sunday: Rest or optional light activity'
    );
    return;
  }

if (days === 1 && goal === 'Build Muscle') {
  setGeneratedPlan(
    'Your 1-Day Muscle Building Plan:\n\n' +
    'Monday: Full Body Strength Training\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Resistance Band Biceps Curls: 2 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Tuesday - Sunday: Rest or optional light activity'
  );
  return;
}


if (days === 1 && goal === 'Lose Fat' && location === 'Home') {
  setGeneratedPlan(
    'Your 1-Day Home Fat Loss Plan:\n\n' +
    'Monday: Full Body Home Workout\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Glute Bridges: 3 sets x 12 reps\n' +
    '• Brisk Walking: 20 minutes'
  );
  return;
}

if (days === 1 && goal === 'Build Muscle' && location === 'Home') {
  setGeneratedPlan(
    'Your 1-Day Home Muscle Building Plan:\n\n' +
    'Monday: Full Body Muscle Building\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Standing Calf Raises: 3 sets x 15 reps'
  );
  return;
}

if (days === 1) {
  setGeneratedPlan(
    'Your 1-Day Full Body Workout Plan:\n\n' +
    'Monday: Full Body Workout\n' +
    '• Bodyweight Squats: 2 sets x 12 reps\n' +
    '• Glute Bridges: 2 sets x 12 reps\n' +
    '• Standing Calf Raises: 2 sets x 15 reps\n' +
    '• Dead Bugs: 2 sets x 10 reps per side\n\n' +
    'Tuesday - Sunday: Rest or optional light activity'
  );
  return;
}


if (days === 2 && goal === 'Lose Fat') {
  setGeneratedPlan(
    'Your 2-Day Fat Loss Workout Plan:\n\n' +
    'Monday: Full Body Strength and Cardio\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Thursday: Full Body Strength and Cardio\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Dead Bugs: 2 sets x 10 reps per side\n' +
    '• Stationary Bike or Brisk Walking: 20 minutes\n\n' +
    'Other Days: Rest or optional light activity'
  );
  return;
}

if (days === 2 && goal === 'Build Muscle') {
  setGeneratedPlan(
    'Your 2-Day Muscle Building Plan:\n\n' +
    'Monday: Full Body Strength Workout A\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Thursday: Full Body Strength Workout B\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Bodyweight Good Mornings: 3 sets x 12 reps\n' +
    '• Resistance Band Triceps Extensions: 3 sets x 12 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n\n' +
    'Other Days: Rest or optional light activity'
  );
  return;
}



if (days === 2) {
  setGeneratedPlan(
    'Your 2-Day Full Body Workout Plan:\n\n' +
    'Monday: Full Body Workout A\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Dead Bugs: 2 sets x 10 reps per side\n\n' +
    'Thursday: Full Body Workout B\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Bird Dogs: 2 sets x 10 reps per side\n\n' +
    'Other Days: Rest or optional light activity'
  );
  return;
}


if (days === 6 && goal === 'Lose Fat') {
  setGeneratedPlan(
    'Your 6-Day Fat Loss Plan:\n\n' +
   
'Monday: Full Body Strength\n' +
'• Bodyweight Squats: 3 sets x 12 reps\n' +
'• Resistance Band Rows: 3 sets x 12 reps\n' +
'• Glute Bridges: 3 sets x 15 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n' +
'• Brisk Walking: 20 minutes\n\n' +

    
'Tuesday: Cardio and Core\n' +
'• Brisk Walking or Marching in Place: 25 minutes\n' +
'• Dead Bugs: 3 sets x 10 reps per side\n' +
'• Bird Dogs: 3 sets x 10 reps per side\n' +
'• Glute Bridges: 3 sets x 15 reps\n' +
'• Standing Knee Raises: 3 sets x 12 reps per side\n\n' +

    
'Wednesday: Upper Body Strength\n' +
'• Resistance Band Chest Press: 3 sets x 12 reps\n' +
'• Resistance Band Rows: 3 sets x 12 reps\n' +
'• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
'• Resistance Band Triceps Extensions: 3 sets x 12 reps\n' +
'• Wall Push-Ups: 2 sets x 10 reps\n\n' +

   
'Thursday: Walking and Mobility\n' +
'• Brisk Walking or Marching in Place: 30 minutes\n' +
'• Cat-Cow Stretch: 2 sets x 10 reps\n' +
'• Hip Flexor Stretch: 2 sets x 30 seconds per side\n' +
'• Standing Quadriceps Stretch: 2 sets x 30 seconds per leg\n' +
'• Gentle Hamstring Stretch: 2 sets x 30 seconds per leg\n\n' +

   
'Friday: Lower Body Strength\n' +
'• Bodyweight Squats: 3 sets x 15 reps\n' +
'• Reverse Lunges: 3 sets x 10 reps per leg\n' +
'• Glute Bridges: 3 sets x 15 reps\n' +
'• Bodyweight Good Mornings: 3 sets x 12 reps\n' +
'• Standing Calf Raises: 3 sets x 20 reps\n\n' +

    
'Saturday: Light Cardio and Core\n' +
'• Easy Walking: 20 minutes\n' +
'• Dead Bugs: 2 sets x 10 reps per side\n' +
'• Bird Dogs: 2 sets x 10 reps per side\n' +
'• Standing Knee Raises: 2 sets x 12 reps per side\n' +
'• Gentle Full Body Stretching: 10 minutes\n\n' +

    'Sunday: Rest'
  );
  return;
}

if (days === 6 && goal === 'Build Muscle') {
  setGeneratedPlan(
    'Your 6-Day Muscle Building Plan:\n\n' +
    
'Monday: Push Workout - Chest, Shoulders, Triceps\n' +
'• Barbell Bench Press: 3 sets x 8-10 reps\n' +
'• Incline Dumbbell Press: 3 sets x 10-12 reps\n' +
'• Seated Dumbbell Shoulder Press: 3 sets x 10 reps\n' +
'• Dumbbell Lateral Raises: 3 sets x 12-15 reps\n' +
'• Cable Triceps Pushdowns: 3 sets x 12 reps\n\n' +

    
'Tuesday: Pull Workout - Back and Biceps\n' +
'• Lat Pulldowns: 3 sets x 10-12 reps\n' +
'• Seated Cable Rows: 3 sets x 10-12 reps\n' +
'• Chest-Supported Dumbbell Rows: 3 sets x 10 reps\n' +
'• Dumbbell Biceps Curls: 3 sets x 12 reps\n' +
'• Hammer Curls: 3 sets x 12 reps\n\n' +

   
'Wednesday: Legs Workout\n' +
'• Leg Press: 3 sets x 10-12 reps\n' +
'• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
'• Seated Leg Curls: 3 sets x 12 reps\n' +
'• Leg Extensions: 3 sets x 12 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n\n' +

   
'Thursday: Push Workout - Chest, Shoulders, Triceps\n' +
'• Machine Chest Press: 3 sets x 10-12 reps\n' +
'• Incline Dumbbell Press: 3 sets x 10 reps\n' +
'• Dumbbell Lateral Raises: 3 sets x 12-15 reps\n' +
'• Cable Triceps Pushdowns: 3 sets x 12 reps\n' +
'• Dumbbell Triceps Kickbacks: 3 sets x 12 reps\n\n' +

   
'Friday: Pull Workout - Back and Biceps\n' +
'• Assisted Pull-Ups: 3 sets x 8-10 reps\n' +
'• Chest-Supported Machine Rows: 3 sets x 10-12 reps\n' +
'• Straight-Arm Cable Pulldowns: 3 sets x 12 reps\n' +
'• EZ-Bar Biceps Curls: 3 sets x 10-12 reps\n' +
'• Incline Dumbbell Curls: 3 sets x 12 reps\n\n' +

    
'Saturday: Legs Workout\n' +
'• Goblet Squats: 3 sets x 10-12 reps\n' +
'• Dumbbell Walking Lunges: 3 sets x 10 reps per leg\n' +
'• Lying Leg Curls: 3 sets x 12 reps\n' +
'• Hip Thrusts: 3 sets x 12 reps\n' +
'• Seated Calf Raises: 3 sets x 15 reps\n\n' +

    'Sunday: Rest'
  );
  return;
}


if (days === 6 && goal === 'Maintain Weight') {
  setGeneratedPlan(
    'Your 6-Day Maintenance Plan:\n\n' +
    
'Monday: Full Body Strength\n' +
'• Leg Press: 3 sets x 12 reps\n' +
'• Seated Cable Rows: 3 sets x 12 reps\n' +
'• Machine Chest Press: 3 sets x 12 reps\n' +
'• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n\n' +

    
'Tuesday: Cardio and Core\n' +
'• Treadmill Brisk Walking: 25 minutes\n' +
'• Stationary Bicycle: 15 minutes\n' +
'• Dead Bugs: 3 sets x 10 reps per side\n' +
'• Bird Dogs: 3 sets x 10 reps per side\n' +
'• Standing Knee Raises: 3 sets x 12 reps per side\n\n' +

   
'Wednesday: Upper Body Strength\n' +
'• Lat Pulldowns: 3 sets x 12 reps\n' +
'• Machine Chest Press: 3 sets x 12 reps\n' +
'• Seated Cable Rows: 3 sets x 12 reps\n' +
'• Dumbbell Biceps Curls: 3 sets x 12 reps\n' +
'• Cable Triceps Pushdowns: 3 sets x 12 reps\n\n' +

   
'Thursday: Walking and Mobility\n' +
'• Treadmill Brisk Walking: 30 minutes\n' +
'• Cat-Cow Stretch: 2 sets x 10 reps\n' +
'• Standing Hip Flexor Stretch: 2 sets x 30 seconds per side\n' +
'• Standing Quadriceps Stretch: 2 sets x 30 seconds per leg\n' +
'• Gentle Hamstring Stretch: 2 sets x 30 seconds per leg\n\n' +

    
'Friday: Lower Body Strength\n' +
'• Leg Press: 3 sets x 12 reps\n' +
'• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
'• Seated Leg Curls: 3 sets x 12 reps\n' +
'• Leg Extensions: 3 sets x 12 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n\n' +

    
'Saturday: Light Cardio and Core\n' +
'• Stationary Bicycle: 20 minutes\n' +
'• Treadmill Easy Walking: 15 minutes\n' +
'• Dead Bugs: 3 sets x 10 reps per side\n' +
'• Bird Dogs: 3 sets x 10 reps per side\n' +
'• Gentle Full Body Stretching: 10 minutes\n\n' +

    'Sunday: Rest'
  );
  return;
}

if (days === 6) {
  setGeneratedPlan(
    'Your 6-Day Fitness Plan:\n\n' +
    'Monday: Upper Body Strength\n' +
    'Tuesday: Lower Body Strength\n' +
    'Wednesday: Cardio and Core\n' +
    'Thursday: Upper Body Strength\n' +
    'Friday: Lower Body Strength\n' +
    'Saturday: Light Cardio and Mobility\n' +
    'Sunday: Rest'
  );
  return;
}

if (days === 7 && goal === 'Lose Fat') {
  setGeneratedPlan(
    'Your 7-Day Fat Loss Plan:\n\n' +
   
'Monday: Full Body Strength\n' +
'• Leg Press: 3 sets x 12 reps\n' +
'• Seated Cable Rows: 3 sets x 12 reps\n' +
'• Machine Chest Press: 3 sets x 12 reps\n' +
'• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
'• Treadmill Brisk Walking: 20 minutes\n\n' +

    
'Tuesday: Cardio and Core\n' +
'• Treadmill Brisk Walking: 25 minutes\n' +
'• Stationary Bicycle: 15 minutes\n' +
'• Dead Bugs: 3 sets x 10 reps per side\n' +
'• Bird Dogs: 3 sets x 10 reps per side\n' +
'• Standing Knee Raises: 3 sets x 12 reps per side\n\n' +

   
'Wednesday: Upper Body Strength\n' +
'• Lat Pulldowns: 3 sets x 12 reps\n' +
'• Machine Chest Press: 3 sets x 12 reps\n' +
'• Seated Cable Rows: 3 sets x 12 reps\n' +
'• Dumbbell Biceps Curls: 3 sets x 12 reps\n' +
'• Cable Triceps Pushdowns: 3 sets x 12 reps\n\n' +

   
'Thursday: Walking and Mobility\n' +
'• Treadmill Brisk Walking: 30 minutes\n' +
'• Cat-Cow Stretch: 2 sets x 10 reps\n' +
'• Standing Hip Flexor Stretch: 2 sets x 30 seconds per side\n' +
'• Standing Quadriceps Stretch: 2 sets x 30 seconds per leg\n' +
'• Gentle Hamstring Stretch: 2 sets x 30 seconds per leg\n\n' +

   
'Friday: Lower Body Strength\n' +
'• Leg Press: 3 sets x 12 reps\n' +
'• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
'• Seated Leg Curls: 3 sets x 12 reps\n' +
'• Leg Extensions: 3 sets x 12 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n\n' +

   
'Saturday: Cardio and Core\n' +
'• Stationary Bicycle: 20 minutes\n' +
'• Treadmill Brisk Walking: 20 minutes\n' +
'• Dead Bugs: 3 sets x 12 reps per side\n' +
'• Bird Dogs: 3 sets x 12 reps per side\n' +
'• Standing Knee Raises: 3 sets x 15 reps per side\n\n' +

    
'Sunday: Active Recovery and Stretching\n' +
'• Easy Walking: 20 minutes\n' +
'• Cat-Cow Stretch: 2 sets x 10 reps\n' +
'• Standing Hip Flexor Stretch: 2 sets x 30 seconds per side\n' +
'• Gentle Hamstring Stretch: 2 sets x 30 seconds per leg\n' +
'• Deep Breathing and Relaxation: 5 minutes'

  );
  return;
}

if (days === 7 && goal === 'Build Muscle') {
  setGeneratedPlan(
    'Your 7-Day Muscle Building Plan:\n\n' +
   
'Monday: Push Workout - Chest, Shoulders, Triceps\n' +
'• Barbell Bench Press: 3 sets x 8-10 reps\n' +
'• Incline Dumbbell Press: 3 sets x 10-12 reps\n' +
'• Seated Dumbbell Shoulder Press: 3 sets x 10 reps\n' +
'• Dumbbell Lateral Raises: 3 sets x 12-15 reps\n' +
'• Cable Triceps Pushdowns: 3 sets x 12 reps\n\n' +

    
'Tuesday: Pull Workout - Back and Biceps\n' +
'• Lat Pulldowns: 3 sets x 10-12 reps\n' +
'• Seated Cable Rows: 3 sets x 10-12 reps\n' +
'• Chest-Supported Dumbbell Rows: 3 sets x 10 reps\n' +
'• Dumbbell Biceps Curls: 3 sets x 12 reps\n' +
'• Hammer Curls: 3 sets x 12 reps\n\n' +

   
'Wednesday: Legs Workout\n' +
'• Leg Press: 3 sets x 10-12 reps\n' +
'• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
'• Seated Leg Curls: 3 sets x 12 reps\n' +
'• Leg Extensions: 3 sets x 12 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n\n' +

    
'Thursday: Push Workout - Chest, Shoulders, Triceps\n' +
'• Machine Chest Press: 3 sets x 10-12 reps\n' +
'• Incline Dumbbell Press: 3 sets x 10 reps\n' +
'• Dumbbell Lateral Raises: 3 sets x 12-15 reps\n' +
'• Cable Triceps Pushdowns: 3 sets x 12 reps\n' +
'• Dumbbell Triceps Kickbacks: 3 sets x 12 reps\n\n' +

    
'Friday: Pull Workout - Back and Biceps\n' +
'• Assisted Pull-Ups: 3 sets x 8-10 reps\n' +
'• Chest-Supported Machine Rows: 3 sets x 10-12 reps\n' +
'• Straight-Arm Cable Pulldowns: 3 sets x 12 reps\n' +
'• EZ-Bar Biceps Curls: 3 sets x 10-12 reps\n' +
'• Incline Dumbbell Curls: 3 sets x 12 reps\n\n' +

   
'Saturday: Legs Workout\n' +
'• Goblet Squats: 3 sets x 10-12 reps\n' +
'• Dumbbell Walking Lunges: 3 sets x 10 reps per leg\n' +
'• Lying Leg Curls: 3 sets x 12 reps\n' +
'• Hip Thrusts: 3 sets x 12 reps\n' +
'• Seated Calf Raises: 3 sets x 15 reps\n\n' +

    
'Sunday: Active Recovery and Mobility\n' +
'• Easy Walking: 20 minutes\n' +
'• Cat-Cow Stretch: 2 sets x 10 reps\n' +
'• Standing Hip Flexor Stretch: 2 sets x 30 seconds per side\n' +
'• Gentle Hamstring Stretch: 2 sets x 30 seconds per leg\n' +
'• Deep Breathing and Relaxation: 5 minutes'

  );
  return;
}

if (days === 7 && goal === 'Maintain Weight') {
  setGeneratedPlan(
    'Your 7-Day Maintenance Plan:\n\n' +
    
'Monday: Full Body Strength\n' +
'• Leg Press: 3 sets x 12 reps\n' +
'• Seated Cable Rows: 3 sets x 12 reps\n' +
'• Machine Chest Press: 3 sets x 12 reps\n' +
'• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n\n' +

  
'Tuesday: Cardio and Core\n' +
'• Treadmill Brisk Walking: 25 minutes\n' +
'• Stationary Bicycle: 15 minutes\n' +
'• Dead Bugs: 3 sets x 10 reps per side\n' +
'• Bird Dogs: 3 sets x 10 reps per side\n' +
'• Standing Knee Raises: 3 sets x 12 reps per side\n\n' +

   
'Wednesday: Upper Body Strength\n' +
'• Lat Pulldowns: 3 sets x 12 reps\n' +
'• Machine Chest Press: 3 sets x 12 reps\n' +
'• Seated Cable Rows: 3 sets x 12 reps\n' +
'• Dumbbell Biceps Curls: 3 sets x 12 reps\n' +
'• Cable Triceps Pushdowns: 3 sets x 12 reps\n\n' +

   
'Thursday: Walking and Mobility\n' +
'• Treadmill Brisk Walking: 30 minutes\n' +
'• Cat-Cow Stretch: 2 sets x 10 reps\n' +
'• Standing Hip Flexor Stretch: 2 sets x 30 seconds per side\n' +
'• Standing Quadriceps Stretch: 2 sets x 30 seconds per leg\n' +
'• Gentle Hamstring Stretch: 2 sets x 30 seconds per leg\n\n' +

   
'Friday: Lower Body Strength\n' +
'• Leg Press: 3 sets x 12 reps\n' +
'• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
'• Seated Leg Curls: 3 sets x 12 reps\n' +
'• Leg Extensions: 3 sets x 12 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n\n' +

   
'Saturday: Light Cardio and Core\n' +
'• Stationary Bicycle: 20 minutes\n' +
'• Treadmill Easy Walking: 15 minutes\n' +
'• Dead Bugs: 3 sets x 10 reps per side\n' +
'• Bird Dogs: 3 sets x 10 reps per side\n' +
'• Gentle Full Body Stretching: 10 minutes\n\n' +

    
'Sunday: Active Recovery and Stretching\n' +
'• Easy Walking: 20 minutes\n' +
'• Cat-Cow Stretch: 2 sets x 10 reps\n' +
'• Standing Hip Flexor Stretch: 2 sets x 30 seconds per side\n' +
'• Gentle Hamstring Stretch: 2 sets x 30 seconds per leg\n' +
'• Deep Breathing and Relaxation: 5 minutes'

  );
  return;
}

if (days === 7) {
  setGeneratedPlan(
    'Your 7-Day Fitness Plan:\n\n' +
    'Monday: Upper Body Strength\n' +
    'Tuesday: Lower Body Strength\n' +
    'Wednesday: Cardio and Core\n' +
    'Thursday: Upper Body Strength\n' +
    'Friday: Lower Body Strength\n' +
    'Saturday: Light Cardio and Mobility\n' +
    'Sunday: Active Recovery - Easy Walking and Stretching'
  );
  return;
}

 
if (days === 3 && goal === 'Lose Fat') {
  setGeneratedPlan(
    'Your 3-Day Fat Loss Workout Plan:\n\n' +
    'Monday: Full Body Strength and Cardio\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Wednesday: Cardio and Core\n' +
    '• Brisk Walking or Stationary Bike: 25 minutes\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Bird Dogs: 3 sets x 10 reps per side\n\n' +
    'Friday: Full Body Strength and Cardio\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Other Days: Rest or optional light activity'
  );
  return;
}

if (days === 3 && goal === 'Build Muscle') {
  setGeneratedPlan(
    'Your 3-Day Muscle Building Plan:\n\n' +
    'Monday: Full Body Strength Workout A\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n\n' +
    'Wednesday: Full Body Strength Workout B\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Resistance Band Chest Press: 3 sets x 12 reps\n' +
    '• Bodyweight Good Mornings: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Friday: Full Body Strength Workout C\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Resistance Band Triceps Extensions: 3 sets x 12 reps\n\n' +
    'Other Days: Rest or optional light activity'
  );
  return;
}

 
if (days === 3) {
  setGeneratedPlan(
    'Your 3-Day Workout Schedule:\n\n' +
    'Monday: Full Body Workout\n' +
    'Wednesday: Full Body Workout\n' +
    'Friday: Full Body Workout'
  );
  
return;
}

if (days === 4 && goal === 'Lose Fat') {
  setGeneratedPlan(
    'Your 4-Day Fat Loss Workout Plan:\n\n' +
    'Monday: Full Body Strength A\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Tuesday: Cardio and Core\n' +
    '• Brisk Walking or Stationary Bike: 30 minutes\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Bird Dogs: 3 sets x 10 reps per side\n\n' +
    'Thursday: Full Body Strength B\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Friday: Cardio and Core\n' +
    '• Brisk Walking or Stationary Bike: 30 minutes\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n\n' +
    'Wednesday, Saturday, Sunday: Rest or optional light activity'
  );
  return;
}

if (days === 4 && goal === 'Build Muscle') {
  setGeneratedPlan(
    'Your 4-Day Muscle Building Workout Plan:\n\n' +
    'Monday: Upper Body A\n' +
    '• Resistance Band Chest Press: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Resistance Band Triceps Extensions: 3 sets x 12 reps\n\n' +
    'Tuesday: Lower Body A\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Thursday: Upper Body B\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Chest Press: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n\n' +
    'Friday: Lower Body B\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Bodyweight Good Mornings: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Wednesday, Saturday, Sunday: Rest or optional light activity'
  );
  return;
}


   if (days === 4) {
    setGeneratedPlan(
      'Your 4-Day Workout Schedule:\n\n' +
      'Monday: Upper Body\n' +
      'Tuesday: Lower Body\n' +
      'Thursday: Upper Body\n' +
      'Friday: Lower Body'
    );
    return;
  }
  
if (days === 5) {

  
if (
  experience === 'Beginner' &&
  fitnessProfile.fitnessGoal === 'Build Muscle' &&
  fitnessProfile.workoutLocation === 'Gym'
) {
  setGeneratedPlan(
    
'Your Beginner Gym Muscle Building Plan:\n' +
'5 Active Days: 3 Strength Workouts + 2 Light Recovery Days\n\n' +

    
'Monday: Full Body Workout\n' +
'• Leg Press: 2 sets x 12 reps\n' +
'• Lat Pulldowns: 2 sets x 12 reps\n' +
'• Seated Leg Curls: 2 sets x 12 reps\n' +
'• Seated Cable Rows: 2 sets x 12 reps\n' +
'• Standing Calf Raises: 2 sets x 15 reps\n\n' +

    'Tuesday: Rest or Light Walking\n' +
    
'Wednesday: Full Body Workout\n' +
'• Goblet Squats: 2 sets x 10 reps\n' +
'• Machine Chest Press: 2 sets x 12 reps\n' +
'• Seated Cable Rows: 2 sets x 12 reps\n' +
'• Dumbbell Romanian Deadlifts: 2 sets x 10 reps\n' +
'• Plank: 2 sets x 20 seconds\n\n' +

    'Thursday: Rest or Light Walking\n' +
    
'Friday: Full Body Workout\n' +
'• Leg Press: 2 sets x 12 reps\n' +
'• Machine Chest Press: 2 sets x 12 reps\n' +
'• Lat Pulldowns: 2 sets x 12 reps\n' +
'• Seated Leg Curls: 2 sets x 12 reps\n' +
'• Dead Bugs: 2 sets x 10 reps per side\n\n' +

    'Saturday: Rest\n' +
    'Sunday: Rest'
  );
  return;
}

  
const location = fitnessProfile.workoutLocation;

if (
  experience === 'Advanced' &&
  fitnessProfile.fitnessGoal === 'Build Muscle' &&
  fitnessProfile.workoutLocation === 'Gym'
) {
  setGeneratedPlan(
    'Your Advanced Gym Muscle Building Plan:\n\n' +
    
'Monday: Push Workout\n' +
'• Barbell Bench Press: 4 sets x 6-8 reps\n' +
'• Incline Dumbbell Press: 3 sets x 8-10 reps\n' +
'• Seated Dumbbell Shoulder Press: 3 sets x 8-10 reps\n' +
'• Dumbbell Lateral Raises: 3 sets x 12-15 reps\n' +
'• Cable Triceps Pushdowns: 3 sets x 10-12 reps\n' +
'• Overhead Triceps Extensions: 3 sets x 10-12 reps\n\n' +

    
'Tuesday: Pull Workout\n' +
'• Pull-Ups: 4 sets x 6-10 reps\n' +
'• Barbell Rows: 4 sets x 8-10 reps\n' +
'• Lat Pulldowns: 3 sets x 10-12 reps\n' +
'• Seated Cable Rows: 3 sets x 10-12 reps\n' +
'• Face Pulls: 3 sets x 12-15 reps\n' +
'• Dumbbell Biceps Curls: 3 sets x 10-12 reps\n' +
'• Hammer Curls: 3 sets x 10-12 reps\n\n' +

    
'Wednesday: Legs Workout\n' +
'• Barbell Squats: 4 sets x 6-8 reps\n' +
'• Romanian Deadlifts: 3 sets x 8-10 reps\n' +
'• Leg Press: 3 sets x 10-12 reps\n' +
'• Seated Leg Curls: 3 sets x 10-12 reps\n' +
'• Leg Extensions: 3 sets x 12-15 reps\n' +
'• Standing Calf Raises: 4 sets x 12-15 reps\n\n' +

    
'Thursday: Upper Body Workout\n' +
'• Incline Dumbbell Press: 3 sets x 8-10 reps\n' +
'• Chest-Supported Rows: 3 sets x 8-10 reps\n' +
'• Machine Chest Press: 3 sets x 10-12 reps\n' +
'• Neutral-Grip Lat Pulldowns: 3 sets x 10-12 reps\n' +
'• Dumbbell Lateral Raises: 3 sets x 12-15 reps\n' +
'• Cable Biceps Curls: 3 sets x 10-12 reps\n' +
'• Rope Triceps Pushdowns: 3 sets x 10-12 reps\n\n' +

    
'Friday: Lower Body Workout\n' +
'• Hack Squats: 3 sets x 8-10 reps\n' +
'• Barbell Hip Thrusts: 3 sets x 8-12 reps\n' +
'• Bulgarian Split Squats: 3 sets x 10 reps per leg\n' +
'• Lying Leg Curls: 3 sets x 10-12 reps\n' +
'• Leg Extensions: 3 sets x 12-15 reps\n' +
'• Seated Calf Raises: 4 sets x 12-15 reps\n\n' +

    'Saturday: Rest\n' +
    'Sunday: Rest'
  );
  return;
}

if (location === 'Home' && fitnessProfile.fitnessGoal === 'Build Muscle') {
  setGeneratedPlan(
    'Your 5-Day Home Muscle Building Plan:\n\n' +

    
    
'Monday: Upper Body\n' +
'• Push-Ups: 3 sets x 10 reps\n' +
'• Pike Push-Ups: 3 sets x 8 reps\n' +
'• Resistance Band Rows: 3 sets x 12 reps\n' +
'• Chair-Supported Triceps Extensions: 3 sets x 10 reps\n\n' +

    
'Tuesday: Lower Body\n' +
'• Bodyweight Squats: 3 sets x 15 reps\n' +
'• Reverse Lunges: 3 sets x 10 reps per leg\n' +
'• Glute Bridges: 3 sets x 15 reps\n' +
'• Standing Calf Raises: 3 sets x 20 reps\n\n' +

    
'Wednesday: Core and Mobility\n' +
'• Plank: 3 sets x 30 seconds\n' +
'• Dead Bugs: 3 sets x 10 reps per side\n' +
'• Bird Dogs: 3 sets x 10 reps per side\n' +
'• Cat-Cow Stretch: 2 sets x 10 reps\n' +
'• Hip Flexor Stretch: 2 sets x 30 seconds per side\n\n' +

    
'Thursday: Upper Body\n' +
'• Incline Push-Ups: 3 sets x 12 reps\n' +
'• Resistance Band Rows: 3 sets x 12 reps\n' +
'• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
'• Resistance Band Triceps Extensions: 3 sets x 12 reps\n\n' +

    
'Friday: Lower Body\n' +
'• Bulgarian Split Squats: 3 sets x 10 reps per leg\n' +
'• Single-Leg Glute Bridges: 3 sets x 12 reps per leg\n' +
'• Bodyweight Good Mornings: 3 sets x 15 reps\n' +
'• Wall Sit: 3 sets x 30 seconds\n' +
'• Single-Leg Calf Raises: 3 sets x 12 reps per leg\n\n' +

    'Saturday: Rest\n' +
    'Sunday: Rest'
  );
  return;
}


if (fitnessProfile.fitnessGoal === 'Build Muscle') {
  setGeneratedPlan(
    'Your 5-Day Muscle Building Plan:\n\n' +
    
'Monday: Chest, Shoulders, Triceps\n' +
'• Bench Press: 3 sets x 10 reps\n' +
'• Shoulder Press: 3 sets x 10 reps\n' +
'• Triceps Pushdowns: 3 sets x 12 reps\n\n' +

    
'Tuesday: Legs\n' +
'• Squats: 3 sets x 10 reps\n' +
'• Leg Press: 3 sets x 12 reps\n' +
'• Leg Curls: 3 sets x 12 reps\n' +
'• Calf Raises: 3 sets x 15 reps\n\n' +

    
'Wednesday: Back and Biceps\n' +
'• Lat Pulldowns: 3 sets x 10 reps\n' +
'• Seated Cable Rows: 3 sets x 12 reps\n' +
'• Dumbbell Biceps Curls: 3 sets x 12 reps\n' +
'• Hammer Curls: 3 sets x 12 reps\n\n' +

    
'Thursday: Upper Body\n' +
'• Incline Dumbbell Press: 3 sets x 10 reps\n' +
'• Seated Cable Rows: 3 sets x 12 reps\n' +
'• Lateral Raises: 3 sets x 12 reps\n' +
'• Triceps Pushdowns: 3 sets x 12 reps\n' +
'• Dumbbell Biceps Curls: 3 sets x 12 reps\n\n' +

    
'Friday: Lower Body\n' +
'• Romanian Deadlifts: 3 sets x 10 reps\n' +
'• Bulgarian Split Squats: 3 sets x 10 reps per leg\n' +
'• Leg Extensions: 3 sets x 12 reps\n' +
'• Seated Leg Curls: 3 sets x 12 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n\n' +

    'Saturday: Rest\n' +
    'Sunday: Rest'
  );
  return;
}


if (
  fitnessProfile.workoutLocation === 'Home' &&
  fitnessProfile.fitnessGoal === 'Lose Fat'
) {
  setGeneratedPlan(
    'Your 5-Day Home Fat Loss Plan:\n\n' +
   
'Monday: Full Body Strength and Cardio\n' +
'• Bodyweight Squats: 3 sets x 12 reps\n' +
'• Resistance Band Rows: 3 sets x 12 reps\n' +
'• Glute Bridges: 3 sets x 15 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n' +
'• Brisk Walking: 20 minutes\n\n' +

    
'Tuesday: Cardio and Core\n' +
'• Brisk Walking or Marching in Place: 25 minutes\n' +
'• Dead Bugs: 3 sets x 10 reps per side\n' +
'• Bird Dogs: 3 sets x 10 reps per side\n' +
'• Glute Bridges: 3 sets x 15 reps\n' +
'• Standing Knee Raises: 3 sets x 12 reps per side\n\n' +

    
'Wednesday: Upper Body Strength\n' +
'• Resistance Band Chest Press: 3 sets x 12 reps\n' +
'• Resistance Band Rows: 3 sets x 12 reps\n' +
'• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
'• Resistance Band Triceps Extensions: 3 sets x 12 reps\n' +
'• Wall Push-Ups: 2 sets x 10 reps\n\n' +

    
'Thursday: Walking and Mobility\n' +
'• Brisk Walking or Marching in Place: 30 minutes\n' +
'• Cat-Cow Stretch: 2 sets x 10 reps\n' +
'• Hip Flexor Stretch: 2 sets x 30 seconds per side\n' +
'• Standing Quadriceps Stretch: 2 sets x 30 seconds per leg\n' +
'• Gentle Hamstring Stretch: 2 sets x 30 seconds per leg\n\n' +

    
'Friday: Lower Body Strength\n' +
'• Bodyweight Squats: 3 sets x 15 reps\n' +
'• Reverse Lunges: 3 sets x 10 reps per leg\n' +
'• Glute Bridges: 3 sets x 15 reps\n' +
'• Bodyweight Good Mornings: 3 sets x 12 reps\n' +
'• Standing Calf Raises: 3 sets x 20 reps\n\n' +

    'Saturday: Rest\n' +
    'Sunday: Rest'
  );
  return;
}

if (fitnessProfile.fitnessGoal === 'Lose Fat') {
  setGeneratedPlan(
    'Your 5-Day Fat Loss Plan:\n\n' +
    
'Monday: Full Body Strength\n' +
'• Bodyweight Squats: 3 sets x 12 reps\n' +
'• Resistance Band Rows: 3 sets x 12 reps\n' +
'• Glute Bridges: 3 sets x 15 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n' +
'• Brisk Walking: 15 minutes\n\n' +

   
'Tuesday: Cardio and Core\n' +
'• Brisk Walking or Stationary Bike: 25 minutes\n' +
'• Dead Bugs: 3 sets x 10 reps per side\n' +
'• Bird Dogs: 3 sets x 10 reps per side\n' +
'• Glute Bridges: 3 sets x 15 reps\n\n' +

    
'Wednesday: Upper Body Strength\n' +
'• Machine Chest Press: 3 sets x 12 reps\n' +
'• Lat Pulldowns: 3 sets x 12 reps\n' +
'• Seated Cable Rows: 3 sets x 12 reps\n' +
'• Dumbbell Biceps Curls: 3 sets x 12 reps\n' +
'• Cable Triceps Pushdowns: 3 sets x 12 reps\n\n' +

    
'Thursday: Cardio and Mobility\n' +
'• Brisk Walking or Stationary Bike: 30 minutes\n' +
'• Cat-Cow Stretch: 2 sets x 10 reps\n' +
'• Hip Flexor Stretch: 2 sets x 30 seconds per side\n' +
'• Standing Quadriceps Stretch: 2 sets x 30 seconds per leg\n' +
'• Gentle Hamstring Stretch: 2 sets x 30 seconds per leg\n\n' +

    
'Friday: Lower Body Strength\n' +
'• Leg Press: 3 sets x 12 reps\n' +
'• Seated Leg Curls: 3 sets x 12 reps\n' +
'• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
'• Leg Extensions: 3 sets x 12 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n\n' +

    'Saturday: Rest\n' +
    'Sunday: Rest'
  );
  return;
}


if (
  fitnessProfile.workoutLocation === 'Home' &&
  fitnessProfile.fitnessGoal === 'Maintain Weight'
) {
  setGeneratedPlan(
    'Your 5-Day Home Maintenance Plan:\n\n' +
    
'Monday: Upper Body Strength\n' +
'• Wall Push-Ups: 3 sets x 12 reps\n' +
'• Resistance Band Rows: 3 sets x 12 reps\n' +
'• Resistance Band Chest Press: 3 sets x 12 reps\n' +
'• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
'• Resistance Band Triceps Extensions: 3 sets x 12 reps\n\n' +

    
'Tuesday: Lower Body Strength\n' +
'• Bodyweight Squats: 3 sets x 15 reps\n' +
'• Reverse Lunges: 3 sets x 10 reps per leg\n' +
'• Glute Bridges: 3 sets x 15 reps\n' +
'• Bodyweight Good Mornings: 3 sets x 12 reps\n' +
'• Standing Calf Raises: 3 sets x 20 reps\n\n' +

   
'Wednesday: Cardio and Core\n' +
'• Brisk Walking or Marching in Place: 25 minutes\n' +
'• Dead Bugs: 3 sets x 10 reps per side\n' +
'• Bird Dogs: 3 sets x 10 reps per side\n' +
'• Glute Bridges: 3 sets x 15 reps\n' +
'• Standing Knee Raises: 3 sets x 12 reps per side\n\n' +

    
'Thursday: Full Body Strength\n' +
'• Bodyweight Squats: 3 sets x 12 reps\n' +
'• Resistance Band Rows: 3 sets x 12 reps\n' +
'• Wall Push-Ups: 3 sets x 10 reps\n' +
'• Glute Bridges: 3 sets x 15 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n\n' +

    
'Friday: Walking and Mobility\n' +
'• Brisk Walking or Marching in Place: 30 minutes\n' +
'• Cat-Cow Stretch: 2 sets x 10 reps\n' +
'• Hip Flexor Stretch: 2 sets x 30 seconds per side\n' +
'• Standing Quadriceps Stretch: 2 sets x 30 seconds per leg\n' +
'• Gentle Hamstring Stretch: 2 sets x 30 seconds per leg\n\n' +

    'Saturday: Rest\n' +
    'Sunday: Rest'
  );
  return;
}


if (fitnessProfile.fitnessGoal === 'Maintain Weight') {
  setGeneratedPlan(
    'Your 5-Day Maintenance Plan:\n\n' +
    
'Monday: Upper Body Strength\n' +
'• Machine Chest Press: 3 sets x 12 reps\n' +
'• Lat Pulldowns: 3 sets x 12 reps\n' +
'• Seated Cable Rows: 3 sets x 12 reps\n' +
'• Dumbbell Biceps Curls: 3 sets x 12 reps\n' +
'• Cable Triceps Pushdowns: 3 sets x 12 reps\n\n' +

    
'Tuesday: Lower Body Strength\n' +
'• Leg Press: 3 sets x 12 reps\n' +
'• Seated Leg Curls: 3 sets x 12 reps\n' +
'• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
'• Leg Extensions: 3 sets x 12 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n\n' +

    
'Wednesday: Moderate Cardio and Core\n' +
'• Brisk Walking or Stationary Bike: 25 minutes\n' +
'• Dead Bugs: 3 sets x 10 reps per side\n' +
'• Bird Dogs: 3 sets x 10 reps per side\n' +
'• Glute Bridges: 3 sets x 15 reps\n' +
'• Standing Knee Raises: 3 sets x 12 reps per side\n\n' +

    
'Thursday: Full Body Strength\n' +
'• Leg Press: 3 sets x 12 reps\n' +
'• Machine Chest Press: 3 sets x 12 reps\n' +
'• Seated Cable Rows: 3 sets x 12 reps\n' +
'• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
'• Standing Calf Raises: 3 sets x 15 reps\n\n' +

    
'Friday: Cardio and Mobility\n' +
'• Brisk Walking or Stationary Bike: 30 minutes\n' +
'• Cat-Cow Stretch: 2 sets x 10 reps\n' +
'• Hip Flexor Stretch: 2 sets x 30 seconds per side\n' +
'• Standing Quadriceps Stretch: 2 sets x 30 seconds per leg\n' +
'• Gentle Hamstring Stretch: 2 sets x 30 seconds per leg\n\n' +

    'Saturday: Rest\n' +
    'Sunday: Rest'
  );
  return;
}


  alert(
    'Your 5-Day Workout Schedule:\n\n' +
    'Monday: Upper Body\n' +
    'Tuesday: Lower Body\n' +
    'Wednesday: Cardio and Core\n' +
    'Thursday: Upper Body\n' +
    'Friday: Lower Body\n' +
    'Saturday: Rest\n' +
    'Sunday: Rest'
  );
  return;
}



  if (fitnessProfile.fitnessGoal === 'Build Muscle') {
    alert('SmartFit recommends a muscle-building workout plan!');
  } else if (fitnessProfile.fitnessGoal === 'Lose Fat') {
    alert('SmartFit recommends a fat-loss workout plan!');
  } else if (fitnessProfile.fitnessGoal === 'Maintain Weight') {
    alert('SmartFit recommends a maintenance workout plan!');
  }
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
