import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
const Dropdownpicker = ({ selectedValue, onValueChange, posts }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Select a Post</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          <Picker.Item label="Select a Post" value={null} />
          {posts?.map(post => (
            <Picker.Item key={post.id} label={`Post ${post.id}`} value={post.id} />
          ))}
        </Picker>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
    picker: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
    },
  });
  


export default Dropdownpicker;
