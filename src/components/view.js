import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ViewBoxesWithColorAndText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left} />
      <View style={styles.right} />
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    padding: 20,
  },
  left: {
    backgroundColor: 'blue',
    flex: 0.3,
  },
  right: {
    backgroundColor: 'red',
    flex: 0.5,
  },
});

export default ViewBoxesWithColorAndText;
