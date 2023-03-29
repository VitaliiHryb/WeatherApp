import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 328px;
  height: 160px;
  background-color: #1e213a;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  flex-basis: calc(25% - 20px);
  margin-bottom: 40px;
  margin-right: 0;
`;

const BlockHeader = styled.h2`
  font-size: 16px;
  margin: 0;
`;

const Number = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-top: 10px;
`;

const PercentageBar = styled.div`
  flex-shrink: 0;
  width: 100%;
  background-color: #e6e6e6;
  height: 10px;
  border-radius: 10px;
  margin-top: 10px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: #fbd224;
    border-radius: 10px;
  }
`;

// Generic component for each block in the content section
const Block = ({ header, number, percentage }) => {
  return (
    <StyledBlock>
      <BlockHeader>{header}</BlockHeader>
      <Number>{number}</Number>
      <PercentageBar percentage={percentage} />
    </StyledBlock>
  );
};

export default Block;
