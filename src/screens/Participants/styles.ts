import {StyleSheet} from 'react-native';

import {themeSchema} from '@utils';

const {theme} = themeSchema();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10
  },
});
