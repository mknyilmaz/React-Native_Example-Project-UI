import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import Icon from 'react-native-vector-icons/FontAwesome';

class ProfilComp1 extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.construction}>
          <Image
            source={{uri: 'https://i.pravatar.cc/400?img=49'}}
            style={{height: 125, width: 125, borderRadius: 70, zIndex: 1}}
          />
          <View style={styles.iconbg}>
            <Icon name={'edit'} size={25} style={styles.icon} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  construction: {
    alignItems: 'center',
    marginTop: 20,
  },

  iconbg: {
    position: 'absolute',
    left: 230,
    top: 80,
    zIndex: 2,
    height: 40,
    width: 40,
    backgroundColor: '#f8b400',
    borderRadius: 25,
  },

  icon: {
    position: 'absolute',
    left: 8,
    top: 8,
    zIndex: 3,
    color: '#373737',
  },
});

export default ProfilComp1;
