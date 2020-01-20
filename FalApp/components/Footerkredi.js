import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';

class Footerkredi extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.kredi}>
        <Text style={styles.kreditext}>KREDİ AL</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  kredi: {
    ...Platform.select({ios: {height: '25%'}, android: {height: '35%'}}),
    borderWidth: 0.3,
    backgroundColor: '#373737',
  },

  kreditext: {
    color: '#f8b400',
    fontFamily: 'Asap-Medium',
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
  },
});

export default Footerkredi;
