import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import * as flightsActions from '../../AirportStore/flights.actions';
import moment from 'moment';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
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
