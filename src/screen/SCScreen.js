import React from 'react';
import {Text} from 'react-native';
import {View, ViewBorder, ViewRow} from '../components/styled/View';

const SCScreen = () => {
  return (
    <View>
      <View bgLightPink>
        <Text>View</Text>
      </View>

      <ViewRow marginTop={15}>
        <View bgDanger flex={1}>
          <Text>View Row 1</Text>
        </View>
        <View bgWarning flex={1}>
          <Text>View Row 2</Text>
        </View>
      </ViewRow>

      <ViewBorder
        brLightPink
        bgChocolate
        width={150}
        height={100}
        marginTop={15}
        borderLeftWidth={5}
        borderRightWidth={5}>
        <Text>ViewBorder</Text>
      </ViewBorder>
    </View>
  );
};

export default SCScreen;
