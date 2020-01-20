import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';

class PersonelpageComp1 extends Component {
  render() {
    return (
      <SafeAreaView style={styles.construction}>
        <View style={styles.imageconstruction}>
          <Image
            source={{
              uri: 'https://i.pravatar.cc/400?img=1',
            }}
            style={{height: 100, width: 100, borderRadius: 50}}
          />

          <View style={styles.textconstruction}>
            <Text style={styles.text1}>Angelina</Text>
            <Text style={styles.text2}>Online</Text>
          </View>
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

  imageconstruction: {
    flexDirection: 'row',
    margin: '10%',
  },

  textconstruction: {
    flexDirection: 'column',
    margin: '3%',
    alignItems: 'center',
  },

  text1: {fontFamily: 'Asap-Medium', fontSize: 20, padding: 10},

  text2: {
    fontFamily: 'Asap-Medium',
    fontSize: 15,
    color: '#54b544',
  },
});

export default PersonelpageComp1;
