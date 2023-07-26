import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';

const bgSize = () => {
  const {height, width, scale, fontScale} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
      <Text>Font scale: {fontScale}</Text>
      <Text>Pixel ratio: {scale}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginBottom: 12,
  },
});

export default bgSize;