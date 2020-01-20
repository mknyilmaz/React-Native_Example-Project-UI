import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import Online from '../components/Online';

class CoffeePage extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SegmentedControlTab
          values={['Müsait', 'Meşgul']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
          tabsContainerStyle={styles.tabsContainerStyle}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          tabTextStyle={styles.tabTextStyle}
          borderRadius={0}
        />
        <Online navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', height: '100%'},

  tabsContainerStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderColor: '#c5c5c5',
  },

  activeTabStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderBottomWidth: 2,
    borderBottomColor: '#f8b400',
  },

  activeTabTextStyle: {
    color: '#373737',
  },

  tabStyle: {
    borderWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderColor: 'transparent',
  },

  tabTextStyle: {
    padding: 10,
    fontFamily: 'Asap-Medium',
    fontSize: 20,
    color: '#c5c5c5',
  },
});

export default CoffeePage;
