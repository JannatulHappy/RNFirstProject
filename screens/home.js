import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2019/05/22/22/28/brainstorm-4222728__340.jpg',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
   height:"100%"
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  banner: {
    height: 300,
    width: 300,
  },
  button:{
    width:"100%",
    backgroundColor:"teal",
    padding:16,
    borderRadius:16,
    alignItems:"center",
    marginBottom:30
  },
  buttonText:{
    color:"white",
    fontWeight:"600",
    fontSize:24
  }
});
