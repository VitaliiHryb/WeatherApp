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
  margin-top: 35px;
  font-size: 14px;
  text-align: center;
`;

const TodaysHighlights = () => {
  return (
    <StyledTodaysHighlights>
      <Header>Today's Highlights</Header>
      <Content>
        <Block type="wsv" header="Wind status" number="7" unit="mph" />
        <Block
          type="percentage"
          header="Humidity"
          number="84"
          unit="%"
          percentage={84}
        />
        <Block type="empty" header="Visibility" number="6,4" unit="miles" />
        <Block type="empty" header="Air Pressure" number="998" unit="mb" />
      </Content>
      <Footer>created by VitaliiHryb</Footer>
    </StyledTodaysHighlights>
  );
};
export default TodaysHighlights;
