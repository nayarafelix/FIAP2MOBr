import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, Image, Text, Button, Linking } from 'react-native';

import { Images } from '@assets';

import { styles } from '../styles';

export function Nayara() {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Image source={Images.members.nayara} style={styles.image}/>
      <Text style={styles.name}>Nayara Felix</Text>
        <Text style={styles.bio}>
          Sou desenvolvedora front end há 5 anos, atuando no momento com React e com experiência na plataforma Magento 2 Adobe Commerce.
          Sou graduada em Sistemas para Internet pela FIAP e, atualmente, estou aprofundando meu conhecimento com um MBA em Desenvolvimento Mobile na mesma instituição.
        </Text>
        <Button title="LinkedIn" onPress={() => Linking.openURL('https://linkedin.com/in/nayarafelix/')} />
    </SafeAreaView>
  );
}
