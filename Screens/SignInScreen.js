import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

const SignInScreen = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={SignInStyles.container}>
      <Text style={SignInStyles.head1}>Sign In</Text>

      <View style={{...SignInStyles.inputout, justifyContent: 'flex-start'}}>
        <FontAwesome
          name="user"
          style={{fontSize: 30, paddingVertical: 10}}
          color={emailFocus === true ? '#FF4242' : 'gray'}
        />
        <TextInput
          style={SignInStyles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailFocus(true);
            setPasswordFocus(false);
          }}
        />
      </View>

      <View style={SignInStyles.inputout}>
        <View style={{flexDirection: 'row'}}>
        <FontAwesome
          name="lock"
          style={{fontSize: 30, paddingVertical: 10}}
          color={passwordFocus == true ? '#FF4242' : 'gray'}
        />
        <TextInput
          style={SignInStyles.input}
          placeholder="Password"
          onFocus={() => {
            setPasswordFocus(true);
            setEmailFocus(false);
          }}
          secureTextEntry={showPassword == true ? false : true}
        />
        </View>
        <Octicons
          name={showPassword == false ? 'eye-closed' : 'eye'}
          size={24}
          color="black"
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <TouchableOpacity style={{width: '85%', paddingBottom: 10}}>
        <Text style={SignInStyles.btn1}>Sign in</Text>
      </TouchableOpacity>

      <Text>Forgot Password?</Text>
      <Text
        style={{
          color: '#FF4242',
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        OR
      </Text>
      <Text style={{fontSize: 24, marginBottom: 10}}>Sign In With</Text>

      <View style={SignInStyles.icons}>
        <TouchableOpacity style={SignInStyles.btn2}>
          <FontAwesome name="google" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={SignInStyles.btn3}>
          <FontAwesome name="facebook" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={SignInStyles.lineHr}></Text>
      <Text style={{marginTop: 5, height: '15%'}}>
        Don't have an account? <Text style={{color: 'green'}}> Sign Up</Text>
      </Text>
    </View>
  );
};

export default SignInScreen;

const SignInStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  head1: {
    color: '#CF2424',
    fontSize: 40,
    fontWeight: '500',
    marginBottom: 15,
  },

  inputout: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    elevation: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    fontSize: 18,
    marginLeft: 5,
  },

  btn1: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: '#FF4249',
    color: 'white',
    borderRadius: 7,
    fontWeight: '800',
    textAlign: 'center',
    elevation: 20,
  },

  btn2: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#FF4249',
    borderRadius: 4,
    textAlign: 'center',
  },

  btn3: {
    backgroundColor: '#4267B2',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    textAlign: 'center',
  },

  icons: {
    flexDirection: 'row',
  },

  lineHr: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0C1',
  },
});
