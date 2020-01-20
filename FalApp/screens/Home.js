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
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Icona from 'react-native-vector-icons/AntDesign';

const {width: WIDTH} = Dimensions.get('window');

class Home extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CoffeePageScreen')}>
            <View style={styles.option}>
              <Icona
                name={'rest'}
                size={32}
                color={'#373737'}
                style={styles.iconoption2}
              />
              <Text style={styles.text2}>Kahve Falı</Text>
              <Icona
                name={'right'}
                size={32}
                color={'#cbcbcb'}
                style={styles.iconoption}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.option}>
            <Icon
              name={'ios-today'}
              size={32}
              color={'#373737'}
              style={styles.iconoption2}
            />
            <Text style={styles.text2}>Tarot Falı</Text>
            <Icona
              name={'right'}
              size={32}
              color={'#cbcbcb'}
              style={styles.iconoption}
            />
          </View>

          <View style={styles.option}>
            <Icon
              name={'ios-water'}
              size={32}
              color={'#373737'}
              style={styles.iconoption2}
            />
            <Text style={styles.text2}>Su Falı</Text>
            <Icona
              name={'right'}
              size={32}
              color={'#cbcbcb'}
              style={styles.iconoption}
            />
          </View>

          <View style={styles.option}>
            <Icon
              name={'ios-hand'}
              size={32}
              color={'#373737'}
              style={styles.iconoption2}
            />
            <Text style={styles.text2}>El Falı</Text>
            <Icona
              name={'right'}
              size={32}
              color={'#cbcbcb'}
              style={styles.iconoption}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: null,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  option: {
    marginBottom: 15,
    flexDirection: 'row',
    padding: 50,
    width: WIDTH - 5,
    backgroundColor: '#f7f7f7',
  },

  text2: {
    color: '#373737',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Asap-Medium',
    paddingLeft: '25%',
  },

  iconoption2: {
    alignSelf: 'center',
    position: 'absolute',
    left: '10%',
  },

  iconoption: {
    alignSelf: 'center',
    position: 'absolute',
    right: '10%',
  },
});

export default Home;
