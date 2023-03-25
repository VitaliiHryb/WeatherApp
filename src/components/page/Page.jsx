import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import * as flightsActions from '../../AirportStore/flights.actions';
import moment from 'moment';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Weather from '../Weather';

function Page() {
  // useEffect(() => {
  //   const fakeCurrentDay = moment('2018-12-01');
  //   fetchFlightsList(moment(fakeCurrentDay));
  // }, []);

  return (
    <React.StrictMode>
      <Weather className="weatherBody" />
    </React.StrictMode>
  );
}

// const mapDispatchToProps = {
//   fetchFlightsList: flightsActions.fetchFlightsList,
// };

export default Page;

// Page.propTypes = {
//   fetchFlightsList: PropTypes.func.isRequired,
// };
