import React from 'react';
import styled from 'styled-components';
import Block from '../generic-components/Block';

const StyledTodaysHighlights = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  text-align: center;
`;

const Footer = styled.div`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
`;

const TodaysHighlights = () => {
  return (
    <StyledTodaysHighlights>
      <Header>Today's Highlights</Header>
      <Content>
        <Block header="Wind status" number="7mph" percentage={84} />
        <Block header="Humidity" number="84%" percentage={84} />
        <Block header="Visibility" number="6,4 miles" percentage={84} />
        <Block header="Air Pressure" number="998 mb" percentage={84} />
      </Content>
      <Footer>created by username - devChallenges.io</Footer>
    </StyledTodaysHighlights>
  );
};

export default TodaysHighlights;
