import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

const SignupScreen = () => {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  return (
    <View style={SignUpStyles.container}>
      <Text style={SignUpStyles.head}>Sign Up</Text>

      <View style={{...SignUpStyles.inputOut,justifyContent:'flex-start'}}>
        <FontAwesome
          name="user"
          style={{fontSize: 30, paddingVertical: 10}}
          color={nameFocus == true ? '#FF4242' : 'gray'}
        />
        <TextInput
          style={SignUpStyles.inputText}
          placeholder="Username"
          onFocus={() => {
            setConfirmPasswordFocus(false);
            setEmailFocus(false);
            setPasswordFocus(false);
            setNameFocus(true);
          }}
        />
      </View>

      <View style={{...SignUpStyles.inputOut,justifyContent:'flex-start'}}>
        <Feather
          name="mail"
          style={{fontSize: 30, paddingVertical: 10}}
          color={emailFocus == true ? '#FF4242' : 'gray'}
        />

        <TextInput
          style={SignUpStyles.inputText}
          placeholder="Email"
          onFocus={() => {
            setEmailFocus(true);
            setPasswordFocus(false);
            setConfirmPasswordFocus(false);
            setNameFocus(false);
          }}
        />
      </View>

      <View style={SignUpStyles.inputOut}>
        <View style={{flexDirection:'row'}}>
        <FontAwesome
          name="lock"
          style={{fontSize: 30, paddingVertical: 10}}
          color={passwordFocus == true ? '#FF4242' : 'gray'}
        />

        <TextInput
          style={SignUpStyles.inputText}
          placeholder="Password"
          onFocus={() => {
            setPasswordFocus(true);
            setEmailFocus(false);
            setConfirmPasswordFocus(false);
            setNameFocus(false);
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

      <View style={SignUpStyles.inputOut}>
        <View style={{flexDirection: 'row'}}>
        <FontAwesome
          name="lock"
          style={{fontSize: 30, paddingVertical: 10}}
          color={confirmPasswordFocus == true ? '#FF4242' : 'gray'}
        />
        <TextInput
          style={SignUpStyles.inputText}
          placeholder="Confirm Password"
          onFocus={() => {
            setConfirmPasswordFocus(true);
            setPasswordFocus(false);
            setEmailFocus(false);
            setNameFocus(false);
          }}
          secureTextEntry={ShowConfirmPassword == true ? false : true}
        />

        </View>

        <Octicons
          name={ShowConfirmPassword == false ? 'eye-closed' : 'eye'}
          size={24}
          color="black"
          onPress={() => setShowConfirmPassword(!ShowConfirmPassword)}
        />
      </View>

      <TouchableOpacity style={{width: '85%', paddingBottom: 10}}>
        <Text style={SignUpStyles.btn1}>Sign up</Text>
      </TouchableOpacity>

      <Text
        style={{
          color: '#FF4242',
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        OR
      </Text>
      <Text style={{fontSize: 24, marginBottom: 10}}>Sign Up With</Text>

      <View style={SignUpStyles.icons}>
        <TouchableOpacity style={SignUpStyles.btn2}>
          <FontAwesome name="google" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={SignUpStyles.btn3}>
          <FontAwesome name="facebook" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={SignUpStyles.lineHr}></Text>

      <View style={SignUpStyles.footerView}>
        <Text>Already have an account?</Text>
        <TouchableOpacity style={{marginLeft: 4}}>
          <Text style={{color: 'green'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const SignUpStyles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  head: {
    fontSize: 40,
    color: '#CF2424',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  inputOut: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    elevation: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent:'space-between',
    alignItems:'center'
  },

  inputText: {
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
  footerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
