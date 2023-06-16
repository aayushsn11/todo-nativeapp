import React, {useState} from 'react';
import {Text, TextInput, Touchable, TouchableOpacity, View} from 'react-native';

const Login = ({navigation}: any) => {
  console.log('naviagation', navigation);
  const defaultForm = {
    email: '',
    password: '',
  };
  const [form, setForm] = useState(defaultForm);
  const handleChange = (name: string) => (value: string) => {
    setForm({...form, [name]: value});
  };

  const handleSubmit = () => {
    // if (form.email === 'aayush@gmail.com' && form.password === 'aayushsoni')
    navigation.navigate('Tasks');
  };

  return (
    <View style={{backgroundColor:'#FFF3E0',flex:1}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: '800',
          color: '#FF6E40',
          marginBottom: 10,
          top: 40,
          // borderWidth: 0.5,
          width: 150,
          alignSelf: 'center',
          backgroundColor: '#F5F5F5',
          borderRadius: 90,
          elevation: 5,
        }}>
        KITE
      </Text>
      <View style={{top: 50}}>
        <View style={{justifyContent: 'center'}}>
          <TextInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            value={form.email}
            style={{
              top: 20,
              marginBottom: 40,
              width: '90%',
              alignSelf: 'center',
              borderRadius: 10,
              backgroundColor: '#F1F1F1',
              elevation: 5,
            }}
          />
          <TextInput
            placeholder="password"
            onChangeText={handleChange('password')}
            value={form.password}
            style={{
              width: '90%',
              marginBottom: 40,
              alignSelf: 'center',
              borderRadius: 10,
              backgroundColor: '#F1F1F1',
              elevation: 5,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF6E40',
            width: '90%',
            alignSelf: 'center',
            borderRadius: 15,
            elevation: 5,
          }}
          onPressIn={handleSubmit}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              color: 'white',
              fontWeight: '600',
              padding: 7,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 15,
            color: 'black',
          }}>
          Login with Google
        </Text>
      </View>
    </View>
  );
};

export default Login;
