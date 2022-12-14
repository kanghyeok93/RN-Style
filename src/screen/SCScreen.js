import React from 'react';
import {Button, ButtonBorder} from '../components/styled/Button';
import {Image, ImageBorder} from '../components/styled/Image';
import {Input, InputBorder} from '../components/styled/Input';
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

      <Button width={150} height={100} marginTop={30} bgGreen>
        <Text ftLarge>Button</Text>
      </Button>

      <ButtonBorder
        width={100}
        height={50}
        bgSilver
        padding={5}
        marginTop={15}
        borderRadius={15}>
        <Text bold ftRed>
          Border Button
        </Text>
      </ButtonBorder>

      <Input
        bgWhite
        marginTop={15}
        placeholder={'placeholder text'}
        paddingLeft={15}
      />

      <View paddingLeft={20} paddingRight={20} width={'100%'}>
        <InputBorder
          bgWhite
          brBlue
          placeholderTextColor={'red'}
          borderWidth={1}
          marginTop={15}
          placeholder={'placeholder text'}
          paddingLeft={15}
          borderRadius={10}
        />
      </View>
    </View>
  );
};

export default SCScreen;
