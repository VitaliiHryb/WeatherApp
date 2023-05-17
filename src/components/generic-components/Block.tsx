import React from 'react';
import styled from 'styled-components';
import plane from '../../images/plane.png';

const StyledBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 328px;
  min-height: 160px;
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
  font-weight: 200;
  margin: 0;
  margin: 15px 0;
`;

const Number = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-top: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0 10px 0;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const PlayIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #e7e7eb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    background-image: url(${plane});
    background-size: cover;
    transform: rotate(170deg);
    margin: 0 0 2px 2px;
  }
`;

const WSVText = styled.span`
  font-size: 14px;
  font-weight: 200;
`;

const Unit = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-left: 5px;
`;

const PercentageBar = styled.div`
  flex-shrink: 0;
  width: 220px;
  background-color: #e6e6e6;
  height: 10px;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 20px;
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

const Label0 = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 9px;
  color: #e6e6e6;
`;

const Label50 = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  color: #e6e6e6;
`;

const Label100 = styled.div`
  position: absolute;
  top: -20px;
  right: 0;
  font-size: 9px;
  color: #e6e6e6;
`;

interface BlockProps {
  header: string;
  number: string;
  percentage?: number;
  unit: string;
  blocktype: 'wsv' | 'percentage' | 'empty';
}

const Block: React.FC<BlockProps> = ({
  header,
  number,
  percentage,
  unit,
  blocktype,
}) => {
  if (blocktype === 'wsv') {
    return (
      <StyledBlock>
        <BlockHeader>{header}</BlockHeader>
        <Number>
          {number}&nbsp;
          <Unit>{unit}</Unit>
        </Number>
        <IconContainer>
          <PlayIcon />
          <WSVText>WSV</WSVText>
        </IconContainer>
      </StyledBlock>
    );
  } else if (blocktype === 'percentage') {
    return (
      <StyledBlock>
        <BlockHeader>{header}</BlockHeader>
        <Number>
          {number}&nbsp;
          <Unit>{unit}</Unit>
        </Number>
        <PercentageBar percentage={percentage}>
          <Label0>0%</Label0>
          <Label50>50%</Label50>
          <Label100>100%</Label100>
        </PercentageBar>
      </StyledBlock>
    );
  } else {
    return (
      <StyledBlock>
        <BlockHeader>{header}</BlockHeader>
        <Number>
          {number}&nbsp;
          <Unit>{unit}</Unit>
        </Number>
      </StyledBlock>
    );
  }
};

export default Block;

/*
import React from 'react';
import styled from 'styled-components';
import plane from '../../images/plane.png';

const StyledBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 328px;
  min-height: 160px;
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
  font-weight: 200;
  margin: 0;
  margin: 15px 0;
`;

const Number = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-top: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0 10px 0;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const PlayIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #e7e7eb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    background-image: url(${plane});
    background-size: cover;
    transform: rotate(170deg);
    margin: 0 0 2px 2px;
  }
`;

const WSVText = styled.span`
  font-size: 14px;
  font-weight: 200;
`;

const Unit = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-left: 5px;
`;

const PercentageBar = styled.div`
  flex-shrink: 0;
  width: 220px;
  background-color: #e6e6e6;
  height: 10px;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 20px;
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

const Label0 = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 9px;
  color: #e6e6e6;
`;

const Label50 = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  color: #e6e6e6;
`;

const Label100 = styled.div`
  position: absolute;
  top: -20px;
  right: 0;
  font-size: 9px;
  color: #e6e6e6;
`;

// Generic component for each block in the content section
const Block = ({ header, number, percentage, unit, blocktype }) => {
  if (blocktype === 'wsv') {
    return (
      <StyledBlock>
        <BlockHeader>{header}</BlockHeader>
        <Number>
          {number}&nbsp;
          <Unit>{unit}</Unit>
        </Number>
        <IconContainer>
          <PlayIcon />
          <WSVText>WSV</WSVText>
        </IconContainer>
      </StyledBlock>
    );
  } else if (blocktype === 'percentage') {
    return (
      <StyledBlock>
        <BlockHeader>{header}</BlockHeader>
        <Number>
          {number}&nbsp;
          <Unit>{unit}</Unit>
        </Number>
        <PercentageBar percentage={percentage}>
          <Label0>0%</Label0>
          <Label50>50%</Label50>
          <Label100>100%</Label100>
        </PercentageBar>
      </StyledBlock>
    );
  } else {
    return (
      <StyledBlock>
        <BlockHeader>{header}</BlockHeader>
        <Number>
          {number}&nbsp;
          <Unit>{unit}</Unit>
        </Number>
      </StyledBlock>
    );
  }
};

export default Block;
*/
