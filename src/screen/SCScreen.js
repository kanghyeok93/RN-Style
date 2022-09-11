import React from 'react';
import {Text} from 'react-native';
import {View, ViewRow} from '../components/styled/View';

const SCScreen = () => {
  return (
    <View>
      <View bgLightPink>
        <Text>SCScreen</Text>
      </View>

      <ViewRow marginTop={15}>
        <View bgDanger flex={1}>
          <Text>Row 1</Text>
        </View>
        <View bgWarning flex={1}>
          <Text>Row 2</Text>
        </View>
      </ViewRow>
    </View>
  );
};

export default SCScreen;
