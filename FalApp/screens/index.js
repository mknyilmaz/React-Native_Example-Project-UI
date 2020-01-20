import React, {Component} from 'react';
import {View, Text} from 'react-native';

import navigation from '../navigation/Navigation';

export const Profil = ({navigation}) => (
  <Screen navigation={navigation} name="Profil" />
);
export const Kredi = ({navigation}) => (
  <Screen navigation={navigation} name="Kredi" />
);
export const Nasilkullanilir = ({navigation}) => (
  <Screen navigation={navigation} name="Nasilkullanilir" />
);
export const Ayarlar = ({navigation}) => (
  <Screen navigation={navigation} name="Ayarlar" />
);
