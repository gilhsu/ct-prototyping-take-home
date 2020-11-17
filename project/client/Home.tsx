import React from 'react';
import { Alert, Button, Platform, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Home() {  
  const placeholderAlert = () => {
      console.log("time to build prototype!")
      if (Platform.OS == 'web') {
        alert('Replace this with starting assessment!')
      } else {
        Alert.alert('Replace this with starting assessment!')
      }
  }
  return (
    <View>
      <Text style={styles.title}>Welcome!</Text>
      <Pressable
        onPress={placeholderAlert}
      >
          <Text style={styles.button}>Get Started</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#333130',
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: 100,
    textAlign: 'center'
  },
  button: {
      alignItems: "center",
      backgroundColor: '#FF6607',
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFFFFF',
      padding: 10,
      borderRadius: 5,
      width: 120,
      textAlign: 'center',
      margin: 'auto'
  }
});