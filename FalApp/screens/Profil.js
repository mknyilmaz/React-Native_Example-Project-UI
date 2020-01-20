import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

import ProfilComp1 from '../components/Profil/ProfilComp1';
import ProfilComp2 from '../components/Profil/ProfilComp2';
import ProfilComp3 from '../components/Profil/ProfilComp3';

class Profil extends Component {
  render() {
    return (
      <SafeAreaView style={styles.construction}>
        <View>
          <ProfilComp1 />
        </View>

        <View>
          <ProfilComp2 navigation={this.props.navigation} />
        </View>

        <View style={styles.viewstyle}>
          <ProfilComp3 />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  construction: {backgroundColor: '#fff', height: '100%'},

  viewstyle: {flex: 1},
});

export default Profil;
