import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, Image, Text, Button, Linking } from 'react-native';

import { Images } from '@assets';

import { styles } from '../styles';

export function Vinicius() {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Image source={Images.members.vinicius} style={styles.image}/>
      <Text style={styles.name}>Vinicius S. Lima</Text>
      <Text style={styles.bio}>
        Atuo como Desenvolvedor IOS desde 2015, formado em Ciência da computação e atualmente faço MBA em desenvolvimento Mobile.
      </Text>
      <Button title="LinkedIn" onPress={() => Linking.openURL('https://www.linkedin.com/in/vnmontanhavn/')} />
    </SafeAreaView>
  );
}
