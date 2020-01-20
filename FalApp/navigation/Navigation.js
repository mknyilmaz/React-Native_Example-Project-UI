import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import Icona from 'react-native-vector-icons/Feather';

import Login from '../components/Login';
import Home from '../screens/Home';
import CoffeePage from '../screens/CoffeePage';
import Setting from '../components/Setting';
import Sidebar from '../components/Sidebar';
import Personelpage from '../screens/Personelpage';
import Online from '../components/Online';
import Profil from '../screens/Profil';
import Kredi from '../screens/Kredi';
import Nasilkullanilir from '../screens/Nasilkullanilir';
import Ayarlar from '../screens/Ayarlar';
import Iletisim from '../screens/Iletisim';

// HEADER
const NavigationStack = createStackNavigator(
  {
    LoginScreen: {
      screen: Login,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    HomeScreen: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Falapp',
        headerLeft: null,
      }),
    },
    SettingScreen: {
      screen: Setting,
    },
    CoffeePageScreen: {
      screen: CoffeePage,
      navigationOptions: () => ({
        title: 'KahveFalı',
      }),
    },
    PersonelpageScreen: {
      screen: Personelpage,
      navigationOptions: ({navigation}) => ({
        title: 'KahveFali',
        headerLeft: (
          <Icona
            style={{paddingLeft: 20}}
            name={'arrow-left'}
            size={28}
            color={'#373737'}
            onPress={() => navigation.navigate('CoffeePageScreen')}
          />
        ),
      }),
    },
    OnlineScreen: {
      screen: Online,
      navigationOptions: () => ({
        title: 'KahveFali',
      }),
    },
  },
  {
    initialRouteName: 'HomeScreen',

    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#f8b400',
      },
      headerTintColor: '#373737',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Asap-Medium',
      },
      headerRight: (
        <Icon
          style={{paddingRight: 20}}
          name={'ios-menu'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerLeft: (
        <Icona
          style={{paddingLeft: 20}}
          name={'arrow-left'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      ),
    }),
    headerLayoutPreset: 'center',
  },
);

//ANASAYFA Drawer StackNavigaiton

const NavigationSideBar0 = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Anasayfa',
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#f8b400',
      },
      headerTintColor: '#373737',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Asap-Medium',
      },
      headerRight: (
        <Icon
          style={{paddingRight: 20}}
          name={'ios-menu'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }),
    headerLayoutPreset: 'center',
  },
);

// PROFİL Drawer StackNavigation

const NavigationSideBar = createStackNavigator(
  {
    ProfilScreen: {
      screen: Profil,
      navigationOptions: () => ({
        title: 'Profil',
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#f8b400',
      },
      headerTintColor: '#373737',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Asap-Medium',
      },
      headerRight: (
        <Icon
          style={{paddingRight: 20}}
          name={'ios-menu'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerLeft: (
        <Icona
          style={{paddingLeft: 20}}
          name={'arrow-left'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      ),
    }),
    headerLayoutPreset: 'center',
  },
);

// KREDİ Drawer Stack Navigation

const NavigationSideBar2 = createStackNavigator(
  {
    KrediScreen: {
      screen: Kredi,
      navigationOptions: () => ({
        title: 'Kredi',
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#f8b400',
      },
      headerTintColor: '#373737',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Asap-Medium',
      },
      headerRight: (
        <Icon
          style={{paddingRight: 20}}
          name={'ios-menu'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerLeft: (
        <Icona
          style={{paddingLeft: 20}}
          name={'arrow-left'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      ),
    }),
    headerLayoutPreset: 'center',
  },
);

// NASIL KLLANILIR Drawer Stack Navigation

const NavigationSideBar3 = createStackNavigator(
  {
    NasilkullanilirScreen: {
      screen: Nasilkullanilir,
      navigationOptions: () => ({
        title: 'Nasıl Kullanılır',
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#f8b400',
      },
      headerTintColor: '#373737',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Asap-Medium',
      },
      headerRight: (
        <Icon
          style={{paddingRight: 20}}
          name={'ios-menu'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerLeft: (
        <Icona
          style={{paddingLeft: 20}}
          name={'arrow-left'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      ),
    }),
    headerLayoutPreset: 'center',
  },
);

// AYARLAR Drawer Stack Navigation

const NavigationSideBar4 = createStackNavigator(
  {
    AyarlarScreen: {
      screen: Ayarlar,
      navigationOptions: () => ({
        title: 'Ayarlar',
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#f8b400',
      },
      headerTintColor: '#373737',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Asap-Medium',
      },
      headerRight: (
        <Icon
          style={{paddingRight: 20}}
          name={'ios-menu'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerLeft: (
        <Icona
          style={{paddingLeft: 20}}
          name={'arrow-left'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      ),
    }),
    headerLayoutPreset: 'center',
  },
);

// İLETİŞİM Drawer Stack Navigation

const NavigationSideBar5 = createStackNavigator(
  {
    IletisimScreen: {
      screen: Iletisim,
      navigationOptions: () => ({
        title: 'İletişim',
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#f8b400',
      },
      headerTintColor: '#373737',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Asap-Medium',
      },
      headerRight: (
        <Icon
          style={{paddingRight: 20}}
          name={'ios-menu'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerLeft: (
        <Icona
          style={{paddingLeft: 20}}
          name={'arrow-left'}
          size={28}
          color={'#373737'}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      ),
    }),
    headerLayoutPreset: 'center',
  },
);
//----------------------------------------

//  DRAWER NAVIGATION

const NavigationDrawer = createDrawerNavigator(
  {
    Anasayfa: {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icona
            name="home"
            size={28}
            color={tintColor}
            style={{marginRight: -5}}
          />
        ),
        drawerLabel: 'Anasayfa',
        marginleft: 15,
      },
      screen: NavigationStack,
    },

    Profil: {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icona
            name="user"
            size={28}
            color={tintColor}
            style={{marginRight: -5}}
          />
        ),
        drawerLabel: 'Profil',
        marginleft: 15,
      },
      screen: NavigationSideBar,
    },
    Kredi: {
      screen: NavigationSideBar2,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icona
            name="credit-card"
            size={28}
            color={tintColor}
            style={{marginRight: -5}}
          />
        ),
        marginleft: 15,
      },
    },
    NasılKullanılır: {
      screen: NavigationSideBar3,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icona
            name="navigation"
            size={28}
            color={tintColor}
            style={{marginRight: -1}}
          />
        ),
        marginleft: 15,
      },
    },
    Ayarlar: {
      screen: NavigationSideBar4,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icona
            name="settings"
            size={28}
            color={tintColor}
            style={{marginRight: -5}}
          />
        ),
        marginleft: 15,
      },
    },
    İletişim: {
      screen: NavigationSideBar5,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icona
            name="info"
            size={28}
            color={tintColor}
            style={{marginRight: -5}}
          />
        ),
        marginleft: 15,
      },
    },
    Çıkış: {
      screen: NavigationStack,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icona
            name="log-out"
            size={28}
            color={tintColor}
            style={{marginRight: -5}}
          />
        ),
        marginleft: 15,
      },
    },
  },

  {
    contentComponent: props => <Sidebar {...props} />,

    drawerWidth: Dimensions.get('window').width * 0.7,
    hideStatusBar: true,
    drawerBackgroundColor: '#f7f7f7',
    overlayColor: 'rgba(248, 191, 69, 0.5)',

    contentOptions: {
      inactiveTintColor: '#373737',
      activeTintColor: '#ffff',
      activeBackgroundColor: '#ffae00',

      itemsContainerStyle: {
        marginTop: 23,
      },

      itemStyle: {
        paddingTop: 15,
        paddingLeft: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#5c5c5c',
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
      },

      labelStyle: {
        fontSize: 20,
      },

      iconContainerStyle: {
        marginLeft: 35,
        alignItems: 'center',
      },
    },
    drawerPosition: 'right',
  },
);

export default createAppContainer(NavigationDrawer);
