import React from 'react';
import {SafeAreaView} from './src/components/styled/View';
import BasicScreen from './src/screen/BasicScreen';
import StyledBasicScreen from './src/screen/StyledBasicScreen';
import SCScreen from './src/screen/SCScreen';

const App = () => {
  return (
    <SafeAreaView bgInfo>
      {/* <BasicScreen /> */}
      {/* <StyledBasicScreen /> */}
      <SCScreen />
    </SafeAreaView>
  );
};

export default App;
