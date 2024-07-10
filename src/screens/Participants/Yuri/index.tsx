import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, Image, Text, Button, Linking } from 'react-native';

import { Images } from '@assets';

import { styles } from '../styles';

export function Yuri() {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Image source={Images.members.yuri} style={styles.image}/>
      <Text style={styles.name}>Yuri Cunha</Text>
      <Text style={styles.bio}>
        Sou Yuri, um entusiasta apaixonado por desenvolvimento de software, resido em Volta Redonda, Rio de Janeiro. Formado em Tecnologia da Informação e atualmente cursando um MBA em Ciência da Computação pela FIAP, trago mais de 4 anos de experiência como desenvolvedor de software, com especialização em tecnologias como Node.js, React, C#, e Java.
      </Text>
      <Button title="LinkedIn" onPress={() => Linking.openURL('https://www.linkedin.com/in/yuriscunha/')} />
    </SafeAreaView>
  );
}
