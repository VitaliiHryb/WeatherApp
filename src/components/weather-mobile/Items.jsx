import React from 'react';
import styled from 'styled-components';
import Tomorrow from './Tomorrow';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100vw;
`;

function Items() {
  return (
    <Container className="items-container">
      <Tomorrow />
      <Tomorrow />
      <Tomorrow />
      <Tomorrow />
      <Tomorrow />
    </Container>
  );
}

export default Items;
