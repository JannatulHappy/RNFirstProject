import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState([]);
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
  };
  useEffect(() => {
    getQuiz();
  }, []);
  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.title}>
              Q.Imaging this is a very cool question!
            </Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>cool option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>cool option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>cool option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>cool option 4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Result')}
              style={styles.button}>
              <Text style={styles.buttonText}>END</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  parent:{
    height:"100%"
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: 'teal',
  },
  option: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  optionButton: {
    backgroundColor: 'teal',
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
  },
});
