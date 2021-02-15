
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, FlatList } from 'react-native';
import ToDoList from './src/lab2'

export default function App() {



  return (
    <View style={styles.container}>
      {/* lab 2 */}
     <ToDoList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#282133",
    paddingHorizontal: 20
  },

});
