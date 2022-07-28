import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Result = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2019/05/22/22/28/brainstorm-4222728__340.jpg',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
       
    
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
       height:"100%"
      },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 300,
    width: 300,
  },
  button: {
    backgroundColor: 'teal',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});
