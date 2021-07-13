import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotogome: '',
    };
  }

  retrivedData = async () => {
    this.login();
  };

  async login() {
    const selectedCompany = await AsyncStorage.getItem('login');
    console.log('Selected', selectedCompany);
    if (selectedCompany === 'true') {
      this.props.navigation.navigate('GetLeackagrList');
    } else {
      this.props.navigation.navigate('login');
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.retrivedData();
    }, 2000);
  }

  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: '#404E59', justifyContent: 'center'}}>
        {/* <Image
          style={{height: 200, width: 200, alignSelf: 'center'}}
          source={require('../assets/glocerylogo.png')}
        /> */}
        <Text style={{alignSelf: 'center', color: '#fff', fontSize: 30}}>
          Register
        </Text>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#fff"
          style={{
            backgroundColor: '#5C6974',
            height: 48,
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 10,
            fontSize: 16,
            paddingStart: 43,
          }}></TextInput>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#fff"
          style={{
            backgroundColor: '#5C6974',
            height: 48,
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 10,
            fontSize: 16,
            paddingStart: 43,
          }}></TextInput>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#fff"
          style={{
            backgroundColor: '#5C6974',
            height: 48,
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 10,
            fontSize: 16,
            paddingStart: 43,
          }}></TextInput>
        <TouchableOpacity
          style={{
            height: 45,
            width: '90%',
            backgroundColor: '#5CE070',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20,
            borderRadius: 10,
          }}>
          <Text style={{alignSelf: 'center', color: 'white'}}>
            CREATE AN ACCOUNT
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            marginTop: 25,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Sign in
        </Text>
      </View>
    );
  }
}
