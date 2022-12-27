import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const App = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}> My First Web App </Text>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    margin: 100,
  },
  text: {
    fontFamily: 'American Typewriter',
    fontSize: 50,
  },
});
