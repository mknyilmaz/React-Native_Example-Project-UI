import React, {Component, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import CollapsibleList from 'react-native-collapsible-list';

import Icon from 'react-native-vector-icons/Ionicons';

const {width: WIDTH} = Dimensions.get('window');

const ProfilComp3 = () => {
  const [buttonText, setButtonText] = useState(['Daha Fazla Göster']);
  const [buttonIcon, setButtonIcon] = useState([
    <Icon name={'ios-arrow-down'} size={18} />,
  ]);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{flex: 1, padding: 10}}
          showsVerticalScrollIndicator={false}>
          <CollapsibleList
            numberOfVisibleItems={5}
            wrapperStyle={styles.wrapperCollapsibleList}
            onToggle={collapsed =>
              collapsed
                ? [
                    setButtonText('Daha Az Göster'),
                    setButtonIcon(<Icon name={'ios-arrow-up'} size={18} />),
                  ]
                : [
                    setButtonText('Daha Fazla Göster'),
                    setButtonIcon(<Icon name={'ios-arrow-down'} size={18} />),
                  ]
            }
            buttonContent={
              <View style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
                <Icon style={styles.iconstyle}>{buttonIcon}</Icon>
              </View>
            }>
            <View style={styles.collapsibleItem}>
              <Text style={styles.buttonText1}>Ayşe Ceyhanlı</Text>
              <Text style={styles.buttonTextDate}>- 04.01.2020</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.buttonText1}>Güneş Hanım</Text>
              <Text style={styles.buttonTextDate}>- 22.12.2019</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.buttonText1}>Ayşe Ceyhanlı</Text>
              <Text style={styles.buttonTextDate}>- 16.12.2019</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.buttonText1}>Ayşe Ceyhanlı</Text>
              <Text style={styles.buttonTextDate}>- 08.12.2019</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.buttonText1}>Ayşe Ceyhanlı</Text>
              <Text style={styles.buttonTextDate}>- 30.11.2019</Text>
            </View>

            <View style={styles.collapsibleItem}>
              <Text style={styles.buttonText1}>Ayşe Ceyhanlı</Text>
              <Text style={styles.buttonTextDate}>- 19.11.2019</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.buttonText1}>Güneş Hanım</Text>
              <Text style={styles.buttonTextDate}>- 04.11.2019</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.buttonText1}>Güneş Hanım</Text>
              <Text style={styles.buttonTextDate}>- 11.09.2019</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.buttonText1}>Olga Hashim</Text>
              <Text style={styles.buttonTextDate}>- 09.08.2019</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.buttonText1}>Ayşe Ceyhanlı</Text>
              <Text style={styles.buttonTextDate}>- 20.06.2019</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.buttonText1}>Ayşe Ceyhanlı</Text>
              <Text style={styles.buttonTextDate}>- 05.07.2019</Text>
            </View>
            <View style={styles.collapsibleItem}>
              <Text style={styles.buttonText1}>Gupse Yıldız</Text>
              <Text style={styles.buttonTextDate}>- 08.04.2019</Text>
            </View>
          </CollapsibleList>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  wrapperCollapsibleList: {
    justifyContent: 'center',
    width: WIDTH - 20,
    flex: 1,
    marginTop: 20,
    overflow: 'hidden',
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
  },
  button: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#c5c5c5c5',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CCC',
    padding: 15,
    flexDirection: 'row',
  },

  buttonText1: {fontFamily: 'Asap-Medium', fontSize: 18, color: '#373737'},

  buttonText: {
    color: '#373737',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Asap-Medium',
  },

  buttonTextDate: {
    paddingTop: 2,
    paddingLeft: 5,
    fontFamily: 'Asap-Medium',
    fontSize: 16,
    color: 'red',
  },

  iconstyle: {
    marginLeft: 8,
    marginTop: 1,
    color: '#373737',
  },
});

export default ProfilComp3;
