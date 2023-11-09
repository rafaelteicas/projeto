import React from 'react';

import {
  Dimensions,
  ListRenderItemInfo,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {CharactersType} from 'src/domain/Characters/charactersType';

import {Box} from '../../../../../components/Box/Box';
import {Text} from '../../../../../components/Text/Text';

export function AgentsComponent(
  item: ListRenderItemInfo<CharactersType>['item'],
) {
  const {width, height} = Dimensions.get('window');

  const DEFAULT_WIDTH = width * 0.3;
  const DEFAULT_HEIGHT = height * 0.3;

  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('AgentScreen', {name: item.name, image: item.image});
  }

  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      style={{backgroundColor: `#${item.backgroundGradientColors}`}}>
      <TouchableOpacity onPress={handleNavigate}>
        <Image
          source={{uri: item.image}}
          width={DEFAULT_WIDTH}
          height={DEFAULT_HEIGHT}
        />
        <Text preset="heading" color="primary">
          {item.name}
        </Text>
        <LinearGradient
          colors={[
            `#${item.backgroundGradientColors[0]}`,
            `#${item.backgroundGradientColors[1]}`,
          ]}
          style={$linearGradientStyle}>
          <Image
            source={{uri: item.background}}
            width={DEFAULT_WIDTH}
            height={DEFAULT_HEIGHT}
            style={{opacity: 0.4, flex: 1}}
          />
        </LinearGradient>
      </TouchableOpacity>
    </Box>
  );
}

const $linearGradientStyle: StyleProp<ViewStyle> = {
  width: 140,
  height: 180,
  top: 80,
  borderRadius: 10,
  position: 'absolute',
  zIndex: -1,
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
};
