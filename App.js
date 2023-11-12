import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Battery from 'expo-battery';

export default function App() {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    const getBatteryLevel = async () => {
      const batteryInfo = await Battery.getBatteryLevelAsync();
      const level = (batteryInfo * 100); 
      setBatteryLevel(level);
    };

    getBatteryLevel();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Battery Level: {batteryLevel !== null ? `\n${batteryLevel.toFixed(2)}%` : 'Loading...'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'green',
    fontSize: 30,
    marginVertical: 5,
  },
});
