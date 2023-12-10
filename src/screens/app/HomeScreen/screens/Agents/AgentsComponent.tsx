import React from 'react';

import {
  Dimensions,
  Image,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {CharactersType} from 'src/domain/Characters/charactersType';

import {Box} from '../../../../../components/Box/Box';
import {Text} from '../../../../../components/Text/Text';

import {AgentsBackgroundCard} from './components/AgentsBackgroundCard';

export function AgentsComponent({item}: ListRenderItemInfo<CharactersType>) {
  const {width, height} = Dimensions.get('window');
  const BACKGROUND_COLORS = [
    `#${item.backgroundGradientColors[0]}`,
    `#${item.backgroundGradientColors[1]}`,
  ];
  const DEFAULT_WIDTH = width * 0.8;
  const DEFAULT_HEIGHT = height * 0.5;
  const navigation = useNavigation();
  function handleNavigate() {
    navigation.navigate('AgentScreen', {
      name: item.name,
      image: item.image,
      description: item.description,
      role: item.role,
      abilities: item.abilities,
    });
  }
  return (
    <Box justifyContent="center" alignItems="center">
      <TouchableOpacity onPress={handleNavigate}>
        <Image
          source={{uri: item.image}}
          width={DEFAULT_WIDTH}
          height={DEFAULT_HEIGHT}
        />
        <Text textAlign="center" preset="heading" color="primary">
          {item.name}
        </Text>
      </TouchableOpacity>
      <AgentsBackgroundCard
        width={width}
        height={height}
        colors={BACKGROUND_COLORS}
        backgroundImage={item.background}
      />
    </Box>
  );
}
