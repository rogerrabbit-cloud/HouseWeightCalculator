import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text, View } from 'react-native';

const App = () => {
  const [numRooms, setNumRooms] = useState('');
  const [totalSize, setTotalSize] = useState('');
  const [weight, setWeight] = useState(null);

  const roofSize = 1000; // constant according to Texas regulations

  const calculateWeight = () => {
    const weight = (parseInt(numRooms) * 500) + (parseInt(totalSize) * 10) + roofSize;
    setWeight(weight);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>House Weight Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Number of Rooms"
        keyboardType="numeric"
        value={numRooms}
        onChangeText={setNumRooms}
      />
      <TextInput
        style={styles.input}
        placeholder="Total Size (sq ft)"
        keyboardType="numeric"
        value={totalSize}
        onChangeText={setTotalSize}
      />
      <Button title="Calculate Weight" onPress={calculateWeight} />
      {weight !== null && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Estimated Weight: {weight} lbs</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 24,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;