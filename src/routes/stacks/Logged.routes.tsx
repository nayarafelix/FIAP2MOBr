import auth from '@react-native-firebase/auth';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Maps, News, Members, Welcome, Gustavo, Nayara, Vinicius, Yuri} from '@screens';
import {themeSchema} from '@utils';

const theme = themeSchema().theme;

export const LoggedStackScreenNames = {
  Welcome: 'Welcome',
  News: 'News',
  Members: 'Members',
  Maps: 'Maps',
  Gustavo: 'Gustavo',
  Nayara: 'Nayara',
  Vinicius: 'Vinicius',
  Yuri: 'Yuri',
} as const;

export type LoggedStackParams = {
  [LoggedStackScreenNames.Welcome]: undefined;
  [LoggedStackScreenNames.News]: undefined;
  [LoggedStackScreenNames.Members]: undefined;
  [LoggedStackScreenNames.Maps]: undefined;
  [LoggedStackScreenNames.Gustavo]: undefined;
  [LoggedStackScreenNames.Nayara]: undefined;
  [LoggedStackScreenNames.Vinicius]: undefined;
  [LoggedStackScreenNames.Yuri]: undefined;
};

const LoggedStackNavigator =
  createNativeStackNavigator<LoggedStackParams>();

function logOut() {
  auth().signOut();
}

const NewsOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: theme.colors.white,
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTitleStyle: {
    fontFamily: theme.fonts.RobotoMedium,
  },
  title: 'Notícias',
  headerRight: ({tintColor}) => (
    <TouchableOpacity onPress={logOut} activeOpacity={0.7}>
      <Icon name="power-off" size={22} color={tintColor} />
    </TouchableOpacity>
  ),
};

const MapsOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: theme.colors.white,
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTitleStyle: {
    fontFamily: theme.fonts.RobotoMedium,
  },
  title: 'Mapa',
};

const MembersOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: theme.colors.white,
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTitleStyle: {
    fontFamily: theme.fonts.RobotoMedium,
  },
  title: 'Membros',
  headerRight: ({tintColor}) => (
    <TouchableOpacity onPress={logOut} activeOpacity={0.7}>
      <Icon name="power-off" size={22} color={tintColor} />
    </TouchableOpacity>
  ),
};

const GustavoOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: theme.colors.white,
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTitleStyle: {
    fontFamily: theme.fonts.RobotoMedium,
  },
  title: 'Gustavo',
  headerRight: ({tintColor}) => (
    <TouchableOpacity onPress={logOut} activeOpacity={0.7}>
      <Icon name="power-off" size={22} color={tintColor} />
    </TouchableOpacity>
  ),
};

const NayaraOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: theme.colors.white,
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTitleStyle: {
    fontFamily: theme.fonts.RobotoMedium,
  },
  title: 'Nayara',
  headerRight: ({tintColor}) => (
    <TouchableOpacity onPress={logOut} activeOpacity={0.7}>
      <Icon name="power-off" size={22} color={tintColor} />
    </TouchableOpacity>
  ),
};

const ViniciusOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: theme.colors.white,
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTitleStyle: {
    fontFamily: theme.fonts.RobotoMedium,
  },
  title: 'Vinicius',
  headerRight: ({tintColor}) => (
    <TouchableOpacity onPress={logOut} activeOpacity={0.7}>
      <Icon name="power-off" size={22} color={tintColor} />
    </TouchableOpacity>
  ),
};

const YuriOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: theme.colors.white,
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTitleStyle: {
    fontFamily: theme.fonts.RobotoMedium,
  },
  title: 'Yuri',
  headerRight: ({tintColor}) => (
    <TouchableOpacity onPress={logOut} activeOpacity={0.7}>
      <Icon name="power-off" size={22} color={tintColor} />
    </TouchableOpacity>
  ),
};

export const LoggedStack = (
  <>
    <LoggedStackNavigator.Screen
      name={LoggedStackScreenNames.Welcome}
      component={Welcome}
    />
    <LoggedStackNavigator.Screen
      name={LoggedStackScreenNames.News}
      component={News}
      options={NewsOptions}
    />
    <LoggedStackNavigator.Screen
      name={LoggedStackScreenNames.Maps}
      component={Maps}
      options={MapsOptions}
    />
    <LoggedStackNavigator.Screen
      name={LoggedStackScreenNames.Members}
      component={Members}
      options={MembersOptions}
    />
    <LoggedStackNavigator.Screen
      name={LoggedStackScreenNames.Gustavo}
      component={Gustavo}
      options={GustavoOptions}
    />
    <LoggedStackNavigator.Screen
      name={LoggedStackScreenNames.Nayara}
      component={Nayara}
      options={NayaraOptions}
    />
    <LoggedStackNavigator.Screen
      name={LoggedStackScreenNames.Vinicius}
      component={Vinicius}
      options={ViniciusOptions}
    />
    <LoggedStackNavigator.Screen
      name={LoggedStackScreenNames.Yuri}
      component={Yuri}
      options={YuriOptions}
    />
  </>
);
