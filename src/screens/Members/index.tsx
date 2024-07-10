import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Images } from '@assets';

import { useMembers } from './hooks/useMembers';

import {styles} from './styles';

export function Members() {
    const {
        goToGustavo,
        goToNayara,
        goToVinicius,
        goToYuri
      } = useMembers();


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={goToGustavo} style={styles.member}>
          <Image source={Images.members.gustavo} style={styles.memberImage} />
          <Text style={styles.memberName}>Gustavo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNayara} style={styles.member}>
          <Image source={Images.members.nayara} style={styles.memberImage} />
          <Text style={styles.memberName}>Nayara</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToVinicius} style={styles.member}>
          <Image source={Images.members.vinicius} style={styles.memberImage} />
          <Text style={styles.memberName}>Vinicius</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToYuri} style={styles.member}>
          <Image source={Images.members.yuri} style={styles.memberImage} />
          <Text style={styles.memberName}>Yuri</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
