import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';

import Stars from 'react-native-stars';

import Icon from 'react-native-vector-icons/FontAwesome';

import Footerkredi from './Footerkredi';
import data from './data';

class FlatListItem extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('PersonelpageScreen')}>
        <View style={styles.option}>
          <Image
            source={{uri: this.props.item.user_avatar}}
            style={{
              height: 100,
              width: 100,
              borderColor: '#ffff',
              borderRadius: 50,
              margin: 5,
            }}></Image>
          <View style={styles.optiontext}>
            <Text style={styles.username}>{this.props.item.username}</Text>
            <Text style={styles.status}>{this.props.item.statuson}</Text>
          </View>

          <View style={styles.rightcontainer}>
            <View style={styles.starcontainer}>
              <Stars
                disabled={true}
                default={3.5}
                count={5}
                spacing={3}
                half={true}
                starSize={20}
                fullStar={
                  <Icon name={'star'} size={20} style={styles.starstyle} />
                }
                emptyStar={
                  <Icon
                    name={'star-o'}
                    size={20}
                    style={[styles.starstyle, styles.emptystar]}
                  />
                }
                halfStar={
                  <Icon
                    name={'star-half-full'}
                    size={20}
                    style={styles.starstyle}
                  />
                }
              />
            </View>

            <View style={styles.optionkredi}>
              <Text style={styles.kreditext}>{this.props.item.kredi}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class Online extends Component {
  render() {
    return (
      <SafeAreaView style={{marginBottom: 45}}>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <FlatListItem
                item={item}
                index={index}
                navigation={this.props.navigation}></FlatListItem>
            );
          }}
        />
        <Footerkredi />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  /* FlatList  */
  option: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderBottomColor: '#c5c5c5',
    padding: 15,
  },

  optiontext: {
    flex: 1,
    flexDirection: 'column',
    height: 100,
    paddingTop: '10%',
    paddingLeft: '5%',
    flexDirection: 'column',
  },

  username: {fontFamily: 'Asap-Medium', fontSize: 16},

  status: {
    fontFamily: 'Asap-Medium',
    fontSize: 16,
    color: '#54b544',
    padding: 5,
  },

  optionkredi: {
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 25,
    backgroundColor: '#54b544',
    alignItems: 'flex-end',
    marginHorizontal: 5,
    marginTop: '18%',
  },

  kreditext: {
    fontFamily: 'Asap-Medium',
    fontSize: 16,
    color: '#ffff',
    alignSelf: 'center',
    marginVertical: '13%',
  },

  starcontainer: {alignItems: 'flex-end'},

  starstyle: {
    color: '#ffcc55',
    backgroundColor: 'transparent',
    paddingTop: 10,
  },

  emptystar: {color: '#ffcc55', backgroundColor: 'transparent', paddingTop: 10},

  rightcontainer: {flexDirection: 'column', alignItems: 'center'},
});

export default Online;
