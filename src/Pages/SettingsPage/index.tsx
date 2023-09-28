import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SettingsPage = () => {
  const {container, content, title} = styles;
  return (
    <View style={container}>
      <View style={content}>
        <Text style={title}>This is the Settings Page</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
  },
});

export default SettingsPage;
