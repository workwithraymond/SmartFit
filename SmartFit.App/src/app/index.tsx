import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
  source={require('../../assets/images/smartfit-characters.png')}
  style={{ width: 450, height: 450, maxWidth: '100%' }}
  resizeMode="contain"
/>
      <Text style={styles.title}>SmartFit</Text>

      <Text style={styles.subtitle}>
        Your Personal Fitness Coach
      </Text>

      <Text style={styles.message}>
        Build your personalized workout plan.
      </Text>
    <Pressable style={styles.button}
        onPress={() => router.push('/profile')} >
      <Text style={styles.buttonText}>Get Started</Text>
    </Pressable>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 24,
  backgroundColor: '#F5F7FC',
},

 title: {
  fontSize: 48,
  fontWeight: 'bold',
  color: '#2563EB',
  letterSpacing: 1,
},

  subtitle: {
    fontSize: 22,
    marginTop: 10,
  },

  message: {
    fontSize: 16,
    marginTop: 20,
  },
button: {
  marginTop: 30,
  backgroundColor: '#3478F6',
  paddingVertical: 18,
  paddingHorizontal: 48,
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 220,
  elevation: 4,
},
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});