import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import logo from '../images/logo.png';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Foodie</Text>

      {/* Applying Image */}
      <View>
        <Image source={logo} style={styles.applogo}/>
      </View>

      <View style={styles.lineHr} />
      <Text style={styles.text}>
        Find the best food around you at lowest price.
      </Text>
      <View style={styles.lineHr} />

      {/* Creating signUp & SignIn Btn */}
      <View style={styles.btnContainer}>
        <TouchableOpacity>
          <Text style={styles.btn1}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.btn1}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff4242',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn1: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: 'white',
    color: '#ff4249',
    borderRadius: 7,
    fontWeight: '900',

  },

  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    marginVertical: 25,
  },

  text: {
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    width: '80%',
  },

  lineHr: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginVertical: 15,
  },

  btnContainer: {
    flexDirection: 'row',
  }
});
