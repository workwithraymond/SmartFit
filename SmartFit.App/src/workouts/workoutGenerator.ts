export type WorkoutProfile = {
  trainingDays: number;
  fitnessGoal: string;
  experienceLevel: string;
  workoutLocation: string;
};

const formatExercise = (
  exerciseName: string,
  sets: number,
  reps: number
) => {
  return `• ${exerciseName}: ${sets} sets x ${reps} reps\n`;
};

const createSquatExercise = (experienceLevel: string) => {
  const sets =
    experienceLevel === 'Beginner' ? 2 :
    experienceLevel === 'Intermediate' ? 3 :
    4;

  const reps =
    experienceLevel === 'Beginner' ? 12 : 15;

  return formatExercise('Bodyweight Squats', sets, reps);
};

export const generateWorkoutPlan = (fitnessProfile: WorkoutProfile): string => {
  
const days = fitnessProfile.trainingDays;
  
const experience = fitnessProfile.experienceLevel;


const goal = fitnessProfile.fitnessGoal;


const location = fitnessProfile.workoutLocation;




if (days === 1 && goal === 'Lose Fat' && location === 'Gym') {
    return (
      'Your 1-Day Fat Loss Workout Plan:\n\n' +
      'Monday: Full Body and Cardio\n' +
      '• Bodyweight Squats: 2 sets x 12 reps\n' +
      '• Glute Bridges: 2 sets x 12 reps\n' +
      '• Standing Calf Raises: 2 sets x 15 reps\n' +
      '• Brisk Walking: 15-20 minutes\n\n' +
      'Tuesday - Sunday: Rest or optional light activity'
    );
  }


if (days === 1 && goal === 'Build Muscle' && location === 'Gym') {
  return (
    'Your 1-Day Muscle Building Plan:\n\n' +
    'Monday: Full Body Strength Training\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Resistance Band Biceps Curls: 2 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Tuesday - Sunday: Rest or optional light activity'
  );
}


if (days === 1 && goal === 'Lose Fat' && location === 'Home' && experience === 'Beginner') {
  return (
    'Your 1-Day Home Fat Loss Plan:\n\n' +
    'Monday: Full Body Home Workout\n' +
    '• Marching in Place: 5 minutes\n' +



createSquatExercise(experience) +



    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Glute Bridges: 3 sets x 12 reps\n' +
    '• Brisk Walking: 20 minutes'
  );
}

if (days === 1 && goal === 'Lose Fat' && location === 'Home' && experience === 'Intermediate') {
  return (
    'Your 1-Day Intermediate Home Fat Loss Plan:\n\n' +
    'Monday: Full Body Strength and Cardio\n' +
    '• Marching in Place: 5 minutes\n' +
    


createSquatExercise(experience) +



    '• Reverse Lunges: 3 sets x 12 reps per leg\n' +
    '• Resistance Band Rows: 3 sets x 15 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Dead Bugs: 3 sets x 12 reps per side\n' +
    '• Brisk Walking: 25 minutes\n\n' +
    'Tuesday - Sunday: Rest or optional light activity'
  );
}

if (days === 1 && goal === 'Lose Fat' && location === 'Home' && experience === 'Advanced') {
  return (
    'Your 1-Day Advanced Home Fat Loss Plan:\n\n' +
    'Monday: Full Body Strength and Conditioning\n' +
    '• Dynamic Warm-Up: 5 minutes\n' + 
    


createSquatExercise(experience) +



    '• Reverse Lunges: 4 sets x 12 reps per leg\n' +
    '• Resistance Band Rows: 4 sets x 15 reps\n' +
    '• Glute Bridges: 4 sets x 15 reps\n' +
    '• Dead Bugs: 3 sets x 15 reps per side\n' +
    '• Fast Marching Intervals: 5 rounds x 1 minute\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Tuesday - Sunday: Rest or optional light activity'
  );
}



if (days === 1 && goal === 'Build Muscle' && location === 'Home') {
  return (
    'Your 1-Day Home Muscle Building Plan:\n\n' +
    'Monday: Full Body Muscle Building\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Standing Calf Raises: 3 sets x 15 reps'
  );
}

if (days === 1 && goal === 'Maintain Weight' && location === 'Home') {
  return (
    'Your 1-Day Home Maintenance Plan:\n\n' +
    'Monday: Full Body Maintenance Workout\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Glute Bridges: 3 sets x 12 reps\n' +
    '• Brisk Walking: 20 minutes'
  );
}



if (days === 1 && goal === 'Maintain Weight' && location === 'Gym') {
  return (
    'Your 1-Day Gym Maintenance Plan:\n\n' +
    'Monday: Full Body Strength and Cardio\n' +
    '• Leg Press: 3 sets x 12 reps\n' +
    '• Seated Cable Rows: 3 sets x 12 reps\n' +
    '• Machine Chest Press: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Treadmill Brisk Walking: 20 minutes\n\n' +
    'Tuesday - Sunday: Rest or optional light activity'
  );
}

if (days === 1) {
  return (
    'Your 1-Day Full Body Workout Plan:\n\n' +
    'Monday: Full Body Workout\n' +
    '• Bodyweight Squats: 2 sets x 12 reps\n' +
    '• Glute Bridges: 2 sets x 12 reps\n' +
    '• Standing Calf Raises: 2 sets x 15 reps\n' +
    '• Dead Bugs: 2 sets x 10 reps per side\n\n' +
    'Tuesday - Sunday: Rest or optional light activity'
  );
}




if (days === 2 && goal === 'Lose Fat' && location === 'Gym') {

  return (
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
}


if (days === 2 && goal === 'Build Muscle' && location === 'Gym') {

  return (
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
}


if (days === 2 && goal === 'Lose Fat' && location === 'Home') {
  return (
    'Your 2-Day Home Fat Loss Plan:\n\n' +
    'Monday: Full Body and Cardio\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 12 reps\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Thursday: Full Body and Core\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Other Days: Rest or optional light walking'
  );
}

if (days === 2 && goal === 'Build Muscle' && location === 'Home') {
  return (
    'Your 2-Day Home Muscle Building Plan:\n\n' +
    'Monday: Full Body Strength A\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n\n' +
    'Thursday: Full Body Strength B\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Resistance Band Shoulder Press: 3 sets x 10 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Other Days: Rest and muscle recovery'
  );
}

if (days === 2 && goal === 'Maintain Weight' && location === 'Home') {
  return (
    'Your 2-Day Home Maintenance Plan:\n\n' +
    'Monday: Full Body Maintenance A\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Glute Bridges: 3 sets x 12 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Thursday: Full Body Maintenance B\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Other Days: Rest or optional light activity'
  );
}



if (days === 2 && goal === 'Maintain Weight' && location === 'Gym') {
  return (
    'Your 2-Day Gym Maintenance Plan:\n\n' +
    'Monday: Full Body Strength A\n' +
    '• Leg Press: 3 sets x 12 reps\n' +
    '• Seated Cable Rows: 3 sets x 12 reps\n' +
    '• Machine Chest Press: 3 sets x 12 reps\n' +
    '• Treadmill Brisk Walking: 15 minutes\n\n' +
    'Thursday: Full Body Strength B\n' +
    '• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
    '• Lat Pulldowns: 3 sets x 12 reps\n' +
    '• Leg Extensions: 3 sets x 12 reps\n' +
    '• Stationary Bicycle: 15 minutes\n\n' +
    'Other Days: Rest or optional light activity'
  );
}


if (days === 2) {
  return (
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
}



if (days === 6 && goal === 'Lose Fat' && location === 'Gym') {

  return (
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
}


if (days === 6 && goal === 'Build Muscle' && location === 'Gym') {

  return (
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
}



if (days === 6 && goal === 'Maintain Weight' && location === 'Gym') {

  return (
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
}

if (days === 6 && goal === 'Lose Fat' && location === 'Home') {
  return (
    'Your 6-Day Home Fat Loss Plan:\n\n' +
    'Monday: Full Body Strength\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Tuesday: Cardio and Core\n' +
    '• Brisk Walking: 25 minutes\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n\n' +
    'Wednesday: Lower Body Strength\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Glute Bridges: 3 sets x 12 reps\n\n' +
    'Thursday: Light Cardio and Mobility\n' +
    '• Brisk Walking: 25 minutes\n' +
    '• Gentle Full Body Stretching: 10 minutes\n\n' +
    'Friday: Upper Body and Core\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n\n' +
    'Saturday: Full Body and Cardio\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Sunday: Rest and recovery'
  );
}

if (days === 6 && goal === 'Build Muscle' && location === 'Home') {
  return (
    'Your 6-Day Home Muscle Building Plan:\n\n' +
    'Monday: Upper Body A\n' +
    '• Wall Push-Ups: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Resistance Band Triceps Extensions: 3 sets x 12 reps\n\n' +
    'Tuesday: Lower Body A\n' +
    '• Bodyweight Squats: 3 sets x 15 reps\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Wednesday: Core and Active Recovery\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Bird Dogs: 3 sets x 10 reps per side\n' +
    '• Brisk Walking: 20 minutes\n' +
    '• Gentle Stretching: 10 minutes\n\n' +
    'Thursday: Upper Body B\n' +
    '• Incline Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Resistance Band Triceps Extensions: 3 sets x 12 reps\n\n' +
    'Friday: Lower Body B\n' +
    '• Step-Ups: 3 sets x 10 reps per leg\n' +
    '• Bodyweight Squats: 3 sets x 15 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Saturday: Core and Mobility\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Bird Dogs: 3 sets x 10 reps per side\n' +
    '• Brisk Walking: 20 minutes\n' +
    '• Gentle Full Body Stretching: 10 minutes\n\n' +
    'Sunday: Rest and muscle recovery'
  );
}


if (days === 6 && goal === 'Maintain Weight' && location === 'Home') {
  return (
    'Your 6-Day Home Maintenance Plan:\n\n' +
    'Monday: Upper Body Strength\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 2 sets x 12 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Tuesday: Lower Body Strength\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Wednesday: Cardio and Core\n' +
    '• Brisk Walking: 25 minutes\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Gentle Stretching: 10 minutes\n\n' +
    'Thursday: Full Body Maintenance\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n\n' +
    'Friday: Cardio and Mobility\n' +
    '• Brisk Walking: 30 minutes\n' +
    '• Bird Dogs: 3 sets x 10 reps per side\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Gentle Full Body Stretching: 10 minutes\n\n' +
    'Saturday: Light Full Body and Core\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 2 sets x 12 reps\n' +
    '• Glute Bridges: 2 sets x 12 reps\n' +
    '• Dead Bugs: 2 sets x 10 reps per side\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Sunday: Rest and recovery'
  );
}


if (days === 6) {
  return (
    'Your 6-Day Fitness Plan:\n\n' +
    'Monday: Upper Body Strength\n' +
    'Tuesday: Lower Body Strength\n' +
    'Wednesday: Cardio and Core\n' +
    'Thursday: Upper Body Strength\n' +
    'Friday: Lower Body Strength\n' +
    'Saturday: Light Cardio and Mobility\n' +
    'Sunday: Rest'
  );
}


if (days === 7 && goal === 'Lose Fat' && location === 'Gym') {

  return (
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
}


if (days === 7 && goal === 'Build Muscle' && location === 'Gym') {

  return (
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
}


if (days === 7 && goal === 'Maintain Weight' && location === 'Gym') {

  return (
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
}


if (days === 7 && goal === 'Lose Fat' && location === 'Home') {
  return (
    'Your 7-Day Home Fat Loss Plan:\n\n' +
    'Monday: Full Body Strength\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Tuesday: Cardio and Core\n' +
    '• Brisk Walking: 25 minutes\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n\n' +
    'Wednesday: Lower Body Strength\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Glute Bridges: 3 sets x 12 reps\n\n' +
    'Thursday: Light Cardio and Mobility\n' +
    '• Brisk Walking: 25 minutes\n' +
    '• Gentle Full Body Stretching: 10 minutes\n\n' +
    'Friday: Upper Body and Core\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n\n' +
    'Saturday: Full Body and Cardio\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Sunday: Active Recovery\n' +
    '• Easy Walking: 20 minutes\n' +
    '• Gentle Stretching: 10 minutes\n' +
    '• Focus on rest and recovery'
  );
}

if (days === 7 && goal === 'Build Muscle' && location === 'Home') {
  return (
    'Your 7-Day Home Muscle Building Plan:\n\n' +
    'Monday: Upper Body A\n' +
    '• Wall Push-Ups: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Resistance Band Triceps Extensions: 3 sets x 12 reps\n\n' +
    'Tuesday: Lower Body A\n' +
    '• Bodyweight Squats: 3 sets x 15 reps\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Wednesday: Core and Mobility\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Bird Dogs: 3 sets x 10 reps per side\n' +
    '• Easy Walking: 20 minutes\n' +
    '• Gentle Stretching: 10 minutes\n\n' +
    'Thursday: Upper Body B\n' +
    '• Incline Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Resistance Band Triceps Extensions: 3 sets x 12 reps\n\n' +
    'Friday: Lower Body B\n' +
    '• Step-Ups: 3 sets x 10 reps per leg\n' +
    '• Bodyweight Squats: 3 sets x 15 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Saturday: Light Cardio and Core\n' +
    '• Brisk Walking: 20 minutes\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Bird Dogs: 3 sets x 10 reps per side\n' +
    '• Gentle Stretching: 10 minutes\n\n' +
    'Sunday: Active Recovery\n' +
    '• Easy Walking: 20 minutes\n' +
    '• Gentle Stretching: 10 minutes\n' +
    '• Focus on rest and muscle recovery'
  );
}

if (days === 7 && goal === 'Maintain Weight' && location === 'Home') {
  return (
    'Your 7-Day Home Maintenance Plan:\n\n' +
    'Monday: Upper Body Strength\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 2 sets x 12 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Tuesday: Lower Body Strength\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Wednesday: Cardio and Core\n' +
    '• Brisk Walking: 25 minutes\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Gentle Stretching: 10 minutes\n\n' +
    'Thursday: Full Body Maintenance\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n\n' +
    'Friday: Cardio and Mobility\n' +
    '• Brisk Walking: 30 minutes\n' +
    '• Bird Dogs: 3 sets x 10 reps per side\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Gentle Full Body Stretching: 10 minutes\n\n' +
    'Saturday: Light Full Body and Core\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 2 sets x 12 reps\n' +
    '• Glute Bridges: 2 sets x 12 reps\n' +
    '• Dead Bugs: 2 sets x 10 reps per side\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Sunday: Active Recovery\n' +
    '• Easy Walking: 20 minutes\n' +
    '• Gentle Stretching: 10 minutes\n' +
    '• Focus on rest and recovery'
  );
}


if (days === 7) {
  return (
    'Your 7-Day Fitness Plan:\n\n' +
    'Monday: Upper Body Strength\n' +
    'Tuesday: Lower Body Strength\n' +
    'Wednesday: Cardio and Core\n' +
    'Thursday: Upper Body Strength\n' +
    'Friday: Lower Body Strength\n' +
    'Saturday: Light Cardio and Mobility\n' +
    'Sunday: Active Recovery - Easy Walking and Stretching'
  );
}

 

if (days === 3 && goal === 'Lose Fat' && location === 'Gym') {

  return (
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
}


if (days === 3 && goal === 'Build Muscle' && location === 'Gym') {

  return (
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
}

if (days === 3 && goal === 'Lose Fat' && location === 'Home') {
  return (
    'Your 3-Day Home Fat Loss Plan:\n\n' +
    'Monday: Full Body and Cardio\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Wednesday: Lower Body and Core\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Friday: Full Body and Cardio\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Other Days: Rest or optional light walking'
  );
}

 
if (days === 3 && goal === 'Build Muscle' && location === 'Home') {
  return (
    'Your 3-Day Home Muscle Building Plan:\n\n' +
    'Monday: Full Body Strength A\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n\n' +
    'Wednesday: Full Body Strength B\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Resistance Band Chest Press: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Friday: Full Body Strength C\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n\n' +
    'Other Days: Rest and muscle recovery'
  );
}


if (days === 3 && goal === 'Maintain Weight' && location === 'Home') {
  return (
    'Your 3-Day Home Maintenance Plan:\n\n' +
    'Monday: Full Body Maintenance A\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Glute Bridges: 3 sets x 12 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Wednesday: Lower Body and Core\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Friday: Full Body Maintenance B\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Other Days: Rest or optional light activity'
  );
}


if (days === 3 && goal === 'Maintain Weight' && location === 'Gym') {
  return (
    'Your 3-Day Gym Maintenance Plan:\n\n' +
    'Monday: Full Body Strength A\n' +
    '• Leg Press: 3 sets x 12 reps\n' +
    '• Seated Cable Rows: 3 sets x 12 reps\n' +
    '• Machine Chest Press: 3 sets x 12 reps\n' +
    '• Treadmill Brisk Walking: 15 minutes\n\n' +
    'Wednesday: Cardio and Core\n' +
    '• Stationary Bicycle: 20 minutes\n' +
    '• Treadmill Brisk Walking: 15 minutes\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Bird Dogs: 3 sets x 10 reps per side\n\n' +
    'Friday: Full Body Strength B\n' +
    '• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
    '• Lat Pulldowns: 3 sets x 12 reps\n' +
    '• Leg Extensions: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Other Days: Rest or optional light activity'
  );
}

if (days === 3) {
  return (
    'Your 3-Day Workout Schedule:\n\n' +
    'Monday: Full Body Workout\n' +
    'Wednesday: Full Body Workout\n' +
    'Friday: Full Body Workout'
  );
}


if (days === 4 && goal === 'Lose Fat' && location === 'Gym') {

  return (
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
}


if (days === 4 && goal === 'Build Muscle' && location === 'Gym') {

  return (
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
}


if (days === 4 && goal === 'Lose Fat' && location === 'Home') {
  return (
    'Your 4-Day Home Fat Loss Plan:\n\n' +
    'Monday: Full Body and Cardio\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Tuesday: Lower Body and Core\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Thursday: Upper Body and Cardio\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Saturday: Full Body and Core\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Other Days: Rest or optional light walking'
  );
}

if (days === 4 && goal === 'Build Muscle' && location === 'Home') {
  return (
    'Your 4-Day Home Muscle Building Plan:\n\n' +
    'Monday: Upper Body A\n' +
    '• Wall Push-Ups: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Resistance Band Triceps Extensions: 3 sets x 12 reps\n\n' +
    'Tuesday: Lower Body A\n' +
    '• Bodyweight Squats: 3 sets x 15 reps\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Thursday: Upper Body B\n' +
    '• Incline Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Resistance Band Triceps Extensions: 3 sets x 12 reps\n\n' +
    'Saturday: Lower Body B\n' +
    '• Bodyweight Squats: 3 sets x 15 reps\n' +
    '• Step-Ups: 3 sets x 10 reps per leg\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n\n' +
    'Other Days: Rest and muscle recovery'
  );
}

if (days === 4 && goal === 'Maintain Weight' && location === 'Home') {
  return (
    'Your 4-Day Home Maintenance Plan:\n\n' +
    'Monday: Upper Body and Cardio\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 2 sets x 12 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Tuesday: Lower Body and Core\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n\n' +
    'Thursday: Full Body Maintenance\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Saturday: Cardio and Core\n' +
    '• Brisk Walking: 25 minutes\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Glute Bridges: 3 sets x 12 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n\n' +
    'Other Days: Rest or optional light activity'
  );
}


if (days === 4 && goal === 'Maintain Weight' && location === 'Gym') {
  return (
    'Your 4-Day Gym Maintenance Plan:\n\n' +
    'Monday: Upper Body Strength\n' +
    '• Machine Chest Press: 3 sets x 12 reps\n' +
    '• Seated Cable Rows: 3 sets x 12 reps\n' +
    '• Lat Pulldowns: 3 sets x 12 reps\n' +
    '• Dumbbell Biceps Curls: 3 sets x 12 reps\n\n' +
    'Tuesday: Lower Body Strength\n' +
    '• Leg Press: 3 sets x 12 reps\n' +
    '• Seated Leg Curls: 3 sets x 12 reps\n' +
    '• Leg Extensions: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Thursday: Upper Body and Cardio\n' +
    '• Machine Chest Press: 3 sets x 12 reps\n' +
    '• Seated Cable Rows: 3 sets x 12 reps\n' +
    '• Cable Triceps Pushdowns: 3 sets x 12 reps\n' +
    '• Treadmill Brisk Walking: 20 minutes\n\n' +
    'Friday: Lower Body and Core\n' +
    '• Dumbbell Romanian Deadlifts: 3 sets x 10 reps\n' +
    '• Leg Press: 3 sets x 12 reps\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Stationary Bicycle: 20 minutes\n\n' +
    'Wednesday, Saturday, Sunday: Rest or optional light activity'
  );
}

   if (days === 4) {
    return (
      'Your 4-Day Workout Schedule:\n\n' +
      'Monday: Upper Body\n' +
      'Tuesday: Lower Body\n' +
      'Thursday: Upper Body\n' +
      'Friday: Lower Body'
    );
  }
  
if (days === 5 && goal === 'Lose Fat' && location === 'Home') {
  return (
    'Your 5-Day Home Fat Loss Plan:\n\n' +
    'Monday: Full Body Strength\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Tuesday: Cardio and Core\n' +
    '• Brisk Walking: 25 minutes\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n\n' +
    'Wednesday: Lower Body Strength\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Glute Bridges: 3 sets x 12 reps\n\n' +
    'Thursday: Light Cardio and Mobility\n' +
    '• Brisk Walking: 25 minutes\n' +
    '• Gentle Full Body Stretching: 10 minutes\n\n' +
    'Friday: Full Body and Cardio\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Brisk Walking: 20 minutes\n\n' +
    'Saturday - Sunday: Rest or optional light walking'
  );
}

if (days === 5 && goal === 'Build Muscle' && location === 'Home') {
  return (
    'Your 5-Day Home Muscle Building Plan:\n\n' +
    'Monday: Upper Body A\n' +
    '• Wall Push-Ups: 3 sets x 12 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Resistance Band Triceps Extensions: 3 sets x 12 reps\n\n' +
    'Tuesday: Lower Body A\n' +
    '• Bodyweight Squats: 3 sets x 15 reps\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Wednesday: Core and Active Recovery\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Bird Dogs: 3 sets x 10 reps per side\n' +
    '• Brisk Walking: 20 minutes\n' +
    '• Gentle Full Body Stretching: 10 minutes\n\n' +
    'Thursday: Upper Body B\n' +
    '• Incline Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 3 sets x 12 reps\n' +
    '• Resistance Band Triceps Extensions: 3 sets x 12 reps\n\n' +
    'Friday: Lower Body B\n' +
    '• Step-Ups: 3 sets x 10 reps per leg\n' +
    '• Bodyweight Squats: 3 sets x 15 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Saturday - Sunday: Rest and muscle recovery'
  );
}

if (days === 5 && goal === 'Maintain Weight' && location === 'Home') {
  return (
    'Your 5-Day Home Maintenance Plan:\n\n' +
    'Monday: Upper Body Strength\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Resistance Band Biceps Curls: 2 sets x 12 reps\n' +
    '• Brisk Walking: 15 minutes\n\n' +
    'Tuesday: Lower Body Strength\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Reverse Lunges: 3 sets x 10 reps per leg\n' +
    '• Glute Bridges: 3 sets x 15 reps\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n\n' +
    'Wednesday: Cardio and Core\n' +
    '• Brisk Walking: 25 minutes\n' +
    '• Standing Knee Raises: 3 sets x 15 reps per side\n' +
    '• Dead Bugs: 3 sets x 10 reps per side\n' +
    '• Gentle Stretching: 10 minutes\n\n' +
    'Thursday: Full Body Maintenance\n' +
    '• Marching in Place: 5 minutes\n' +
    '• Bodyweight Squats: 3 sets x 12 reps\n' +
    '• Wall Push-Ups: 3 sets x 10 reps\n' +
    '• Resistance Band Rows: 3 sets x 12 reps\n' +
    '• Glute Bridges: 3 sets x 15 reps\n\n' +
    'Friday: Cardio and Mobility\n' +
    '• Brisk Walking: 30 minutes\n' +
    '• Bird Dogs: 3 sets x 10 reps per side\n' +
    '• Standing Calf Raises: 3 sets x 15 reps\n' +
    '• Gentle Full Body Stretching: 10 minutes\n\n' +
    'Saturday - Sunday: Rest or optional light walking'
  );
}


if (days === 5) {

  
if (
  experience === 'Beginner' &&
  fitnessProfile.fitnessGoal === 'Build Muscle' &&
  fitnessProfile.workoutLocation === 'Gym'
) {
  return (
    
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
}

  
const location = fitnessProfile.workoutLocation;

if (
  experience === 'Advanced' &&
  fitnessProfile.fitnessGoal === 'Build Muscle' &&
  fitnessProfile.workoutLocation === 'Gym'
) {
  return (
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
}

if (fitnessProfile.fitnessGoal === 'Build Muscle' && location === 'Gym') {

  return (
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
}


if (fitnessProfile.fitnessGoal === 'Lose Fat' && location === 'Gym') {

  return (
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
}


if (fitnessProfile.fitnessGoal === 'Maintain Weight' && location === 'Gym') {

  return (
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
}


  return (
    'Your 5-Day Workout Schedule:\n\n' +
    'Monday: Upper Body\n' +
    'Tuesday: Lower Body\n' +
    'Wednesday: Cardio and Core\n' +
    'Thursday: Upper Body\n' +
    'Friday: Lower Body\n' +
    'Saturday: Rest\n' +
    'Sunday: Rest'
  );
}



  if (fitnessProfile.fitnessGoal === 'Build Muscle') {
    return ('SmartFit recommends a muscle-building workout plan!');
  } else if (fitnessProfile.fitnessGoal === 'Lose Fat') {
    return ('SmartFit recommends a fat-loss workout plan!');
  } else if (fitnessProfile.fitnessGoal === 'Maintain Weight') {
    return ('SmartFit recommends a maintenance workout plan!');
  }
  return '';
};
