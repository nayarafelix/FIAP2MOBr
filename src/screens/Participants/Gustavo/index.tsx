import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, Image, Text, Button, Linking } from 'react-native';

import { Images } from '@assets';

import { styles } from '../styles';

export function Gustavo() {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Image source={Images.members.gustavo} style={styles.image}/>
      <Text style={styles.name}>Gustavo Matias</Text>
      <Text style={styles.bio}>
        Atuo na área de tecnologia da informação desde 2019, e como desenvolvedor front-end desde 2020, com foco em ReactJS. Atualmente faço MBA em desenvolvimento mobile.
      </Text>
      <Button title="LinkedIn" onPress={() => Linking.openURL('https://www.linkedin.com/in/gustavomatias/')} />
    </SafeAreaView>
  );
}
