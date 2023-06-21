import React from 'react';
import styled from 'styled-components';
import Weather from '../weather-mobile/Weather';
import Items from '../weather-mobile/Items';
import TodaysHighlights from '../weather-mobile/TodaysHighlights';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const DesktopWeather = styled(Weather)`
  @media (min-width: 768px) {
    width: 459px;
  }
`;

function Page() {
  return (
    <React.StrictMode>
      <Container className="page-container">
        <DesktopWeather className="weatherBody" />
        <Items />
        <TodaysHighlights />
      </Container>
    </React.StrictMode>
  );
}

export default Page;

/*
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Weather from '../weather-mobile/Weather';
import Items from '../weather-mobile/Items';
import TodaysHighlights from '../weather-mobile/TodaysHighlights';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

function Page() {
  return (
    <React.StrictMode>
      <Container className="page-container">
        <Weather className="weatherBody" />
        <Items />
        <TodaysHighlights />
      </Container>
    </React.StrictMode>
  );
}

export default Page;
*/
