import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class PersonelpageComp2 extends Component {
  render() {
    return (
      <SafeAreaView style={styles.construction}>
        <View style={styles.textconstruction}>
          <Text style={styles.text2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  construction: {
    marginTop: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: '#c5c5c5',
  },

  textconstruction: {
    flexDirection: 'row',
    margin: '5%',
  },

  text2: {
    padding: 15,
    lineHeight: 25,
    fontFamily: 'Asap-Medium',
    fontSize: 21,
    color: '#373737',
  },
});

export default PersonelpageComp2;
