import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

class Kredibox extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.kredibox}>
              <View style={styles.over}></View>
              <View style={styles.textbox}>
                <Text style={styles.text1}>15 Kredi</Text>
                <Text style={styles.text2}>Hemen Satın Al</Text>
              </View>
              <View style={styles.greenbox}>
                <Text style={styles.text3}> 20 ₺ </Text>
              </View>
            </View>

            <View style={styles.kredibox}>
              <View style={styles.over}></View>
              <View style={styles.textbox}>
                <Text style={styles.text1}>30 Kredi</Text>
                <Text style={styles.text2}>Hemen Satın Al</Text>
              </View>
              <View style={styles.greenbox}>
                <Text style={styles.text3}> 30 ₺ </Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.kredibox}>
              <View style={styles.over}></View>
              <View style={styles.textbox}>
                <Text style={styles.text1}>45 Kredi</Text>
                <Text style={styles.text2}>+5 Kredi Hediye</Text>
              </View>
              <View style={styles.greenbox}>
                <Text style={styles.text3}> 45 ₺ </Text>
              </View>
            </View>

            <View style={styles.kredibox}>
              <View style={styles.over}></View>
              <View style={styles.textbox}>
                <Text style={styles.text1}>100 Kredi</Text>
                <Text style={styles.text2}>+10 Kredi Hediye</Text>
              </View>
              <View style={styles.greenbox}>
                <Text style={styles.text3}> 100 ₺ </Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.kredibox}>
              <View style={styles.over}></View>
              <View style={styles.textbox}>
                <Text style={styles.text1}>200 Kredi</Text>
                <Text style={styles.text2}>+20 Kredi Hediye</Text>
              </View>
              <View style={styles.greenbox}>
                <Text style={styles.text3}> 200 ₺ </Text>
              </View>
            </View>

            <View style={styles.kredibox}>
              <View style={styles.over}></View>
              <View style={styles.textbox}>
                <Text style={styles.text1}>500 Kredi</Text>
                <Text style={styles.text2}>+35 Kredi Hediye</Text>
              </View>
              <View style={styles.greenbox}>
                <Text style={styles.text3}> 380 ₺ </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.shopbutton}>
              <Text style={styles.text4}>Satın Al</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'center'},

  kredibox: {
    margin: 5,
    backgroundColor: '#f7f7f7',
    width: 190,
    height: 190,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  over: {
    backgroundColor: '#d8d8d8',
    borderRadius: 50,
    position: 'absolute',
    left: 5,
    top: 5,
    zIndex: 2,
    width: 15,
    height: 15,
  },

  textbox: {alignItems: 'center', paddingVertical: 30},

  text1: {
    fontSize: 35,
    fontFamily: 'Asap-Medium',
    fontWeight: 'bold',
    color: '#373737',
    textAlign: 'center',
  },

  text2: {
    fontSize: 22,
    fontFamily: 'Asap-Medium',

    color: '#e35151',
    textAlign: 'center',
  },

  greenbox: {backgroundColor: '#54b544'},

  text3: {
    fontSize: 30,
    fontFamily: 'Asap-Medium',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  shopbutton: {
    backgroundColor: '#373737',
    borderRadius: 20,
    width: '80%',
    alignSelf: 'center',
    margin: 15,
  },

  text4: {
    fontSize: 30,
    fontFamily: 'Asap-Medium',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 18,
  },
});

export default Kredibox;
