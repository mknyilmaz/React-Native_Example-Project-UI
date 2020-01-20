import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import PersonelpageComp1 from '../components/PersonelpageComp1';
import PersonelpageComp2 from '../components/PersonelpageComp2';
import PersonelpageComp3 from '../components/PersonelpageComp3';

class Personelpage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.construction}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <PersonelpageComp1 />
          </View>
          <View>
            <PersonelpageComp2 />
          </View>
          <View>
            <PersonelpageComp3 />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  construction: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default Personelpage;
