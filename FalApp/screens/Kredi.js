import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Kredibox from '../components/Kredibox';

class Kredi extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Kredibox />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', height: '100%'},

  kredibox: {},
});

export default Kredi;
