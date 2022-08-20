import React from 'react';
import styled from 'styled-components/native';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.Text`
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.SafeAreaView`
  background: papayawhip;
`;

const Container = styled.View`
  background: powderblue;
  height: 100%;
`;

const StyledBasicScreen = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Hello World, this is my first styled component!</Title>
      </Container>
    </Wrapper>
  );
};

export default StyledBasicScreen;
