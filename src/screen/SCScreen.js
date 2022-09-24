import React from 'react';
import {Image, ImageBorder} from '../components/styled/Image';
import {Text} from '../components/styled/Text';
import {View, ViewBorder, ViewRow} from '../components/styled/View';

const SCScreen = () => {
  return (
    <View alignItems={'center'}>
      <View bgLightPink>
        <Text>View</Text>
      </View>

      <ViewRow marginTop={15}>
        <View bgDanger flex={1}>
          <Text>View Row 1</Text>
        </View>
        <View bgWarning flex={1}>
          <Text bold>View Row 2</Text>
        </View>
      </ViewRow>

      <ViewBorder
        brLightPink
        bgChocolate
        width={150}
        height={100}
        marginTop={15}
        borderRadius={50}
        borderWidth={25}
        borderTopWidth={5}
        borderBottomWidth={5}>
        <Text>ViewBorder</Text>
      </ViewBorder>

      <ViewRow marginTop={30} justifyContent={'space-around'} width={'100%'}>
        <Image
          width={150}
          height={150}
          source={{
            uri: 'https://i.picsum.photos/id/209/200/300.jpg?hmac=O_heTT23fut3YnBKcsYxjoH_MCl9YGPcxXx-ZHOjBgc',
          }}
        />

        <ImageBorder
          brOrange
          width={150}
          height={150}
          borderRadius={100}
          borderWidth={10}
          source={{
            uri: 'https://i.picsum.photos/id/209/200/300.jpg?hmac=O_heTT23fut3YnBKcsYxjoH_MCl9YGPcxXx-ZHOjBgc',
          }}
        />
      </ViewRow>
    </View>
  );
};

export default SCScreen;
