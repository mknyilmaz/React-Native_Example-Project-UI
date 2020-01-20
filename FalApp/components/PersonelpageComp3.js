import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class PersonelpageComp3 extends Component {
  render() {
    return (
      <SafeAreaView style={styles.construction}>
        <View style={styles.textconstruction}>
          <TouchableOpacity>
            <View style={styles.border}>
              <Text style={styles.text2}>Canlı Görüş</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.border2}>
              <Text style={styles.text2}>Mesaj Gönder</Text>
            </View>
          </TouchableOpacity>
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
    flexDirection: 'column',
    marginBottom: '8%',
  },

  border: {
    marginHorizontal: '10%',
    marginVertical: '5%',
    borderRadius: 15,
    backgroundColor: '#ee5e36',
    alignItems: 'center',
  },

  border2: {
    marginHorizontal: '10%',
    borderRadius: 15,
    backgroundColor: '#373737',
    alignItems: 'center',
  },

  text2: {
    padding: 25,
    fontFamily: 'Asap-Medium',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PersonelpageComp3;
