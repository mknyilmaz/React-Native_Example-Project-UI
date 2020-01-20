import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {DrawerNavigatorItems} from 'react-navigation-drawer';

export default Sidebar = props => (
  <ScrollView>
    <View style={styles.profilecont}>
      <Image
        style={{width: 150, height: 150}}
        source={require('../assets/lofo.png')}
      />
    </View>

    <View style={styles.container}>
      <DrawerNavigatorItems {...props} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {flex: 1},
  profilecont: {alignItems: 'center', marginTop: 47},
});
