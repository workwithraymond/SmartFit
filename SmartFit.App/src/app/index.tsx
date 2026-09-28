import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SmartFit</Text>

      <Text style={styles.subtitle}>
        Your Personal Fitness Coach
      </Text>

      <Text style={styles.message}>
        Build your personalized workout plan.
      </Text>
    <Pressable style={styles.button}
        onPress={() => alert('Welcome to SmartFit!')} >
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
    padding: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
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
    marginTop: 20,
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});