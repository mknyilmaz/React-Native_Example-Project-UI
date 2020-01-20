import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icona from 'react-native-vector-icons/AntDesign';

const {width: WIDTH} = Dimensions.get('window');

class Login extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.lgcontainer}>
          <Image
            style={{width: 250, height: 250}}
            source={require('../assets/lofo.png')}
          />
        </View>
        <View>
          <TextInput style={styles.txtinput} placeholder={'Kullanıcı Adı'} />
          <Icon
            name={'user'}
            size={28}
            color={'#5c5c5c'}
            style={styles.inputicon}
          />
        </View>
        <View>
          <TextInput
            style={styles.txtinput}
            placeholder={'Şifre'}
            secureTextEntry={true}
          />
          <Icon
            name={'lock'}
            size={28}
            color={'#5c5c5c'}
            style={styles.inputicon}
          />
        </View>
        <View style={styles.touch}>
          <TouchableOpacity style={styles.btnlogin}>
            <Text style={styles.text}>Giriş</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnsign}>
            <Text style={styles.text}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.borderstyle}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={styles.text2}>Kayıt Olmadan Devam Et</Text>
          <Icona
            name="arrowright"
            size={28}
            color={'#373737'}
            style={styles.outicon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: null,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8b400',
  },

  lgicon: {},

  lgcontainer: {alignItems: 'center'},

  txtinput: {
    backgroundColor: '#ffff',
    color: '#7a7a7a',
    borderRadius: 100,
    width: WIDTH - 55,
    height: 45,
    fontSize: 16,
    marginTop: 20,
    marginHorizontal: 25,
    paddingLeft: 50,
  },

  inputicon: {position: 'absolute', left: 45, top: 25},

  touch: {flexDirection: 'row'},

  btnlogin: {
    backgroundColor: '#ee5e36',
    borderRadius: 10,
    width: WIDTH - 250,
    height: 55,
    fontSize: 16,
    marginTop: 20,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  text: {
    color: '#ffff',
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Asap-Medium',
  },

  btnsign: {
    backgroundColor: '#373737',
    borderRadius: 10,
    width: WIDTH - 250,
    height: 55,
    fontSize: 16,
    marginTop: 20,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  text2: {
    marginTop: 20,
    color: '#373737',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Asap-Medium',
  },

  borderstyle: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    borderColor: '#373737',
    borderBottomWidth: 1,
  },

  outicon: {position: 'absolute', top: 19, right: '55%'},
});

export default Login;
