import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 177px;
  font-size: 1rem;
  font-weight: 400;
  color: white;
  background-color: #1e213a;
  margin: 52px 13px 32px 13px;
  border: none;

  &:last-child {
    margin-right: 0;
  }
`;

function Button(props) {
  const { text1, icon, text2, onClick } = props;

  return (
    <StyledButton onClick={onClick}>
      <span style={{ display: 'block', margin: '10px' }}>{text1}</span>
      <img src={icon} alt="Icon" width="40" height="40" />
      <span style={{ display: 'block', marginTop: '25px' }}>{text2}</span>
    </StyledButton>
  );
}

export default Button;
