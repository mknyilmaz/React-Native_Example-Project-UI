import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

class ProfilComp2 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.construction}>
        <View>
          <Text style={styles.text1}> Ayşe Tandoğan </Text>
          <Text style={styles.text2}> 1200 Kredi </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Kredi')}>
          <View style={styles.button}>
            <Text style={styles.text3}> Kredi Al </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  construction: {alignItems: 'center', margin: 10},

  text1: {fontFamily: 'Asap-Medium', fontSize: 20, color: '#373737'},

  text2: {
    fontFamily: 'Asap-Medium',
    fontSize: 28,
    color: '#54b544',
    marginTop: 10,
  },

  text3: {
    fontFamily: 'Asap-Medium',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#373737',
    textAlign: 'center',
    padding: 13,
  },

  button: {
    backgroundColor: '#f8b400',
    width: 220,
    borderRadius: 35,
    marginTop: 15,
  },
});

export default ProfilComp2;
