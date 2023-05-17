// import { createSelector } from 'reselect';

import { createSelector } from 'reselect';
// import { RootState } from '../types'; // Assuming RootState is defined elsewhere

export const flightsListSelector = (state: any) => {
  return state.flights.flightsList;
};

export const dateSelector = (state: any) => {
  return state.flights.date;
};

export const departureFlightsListSelector = createSelector(
  [flightsListSelector],
  flightsList => {
    if (flightsList.length === 0) return flightsList;
    return flightsList.body.departure;
  },
);

export const arrivalFlightsListSelector = createSelector(
  [flightsListSelector],
  flightsList => {
    if (flightsList.length === 0) return flightsList;
    return flightsList.body.arrival;
  },
);

/*
export const flightsListSelector = state => {
  return state.flights.flightsList;
};

export const dateSelector = state => {
  return state.flights.date;
};

export const departureFlightsListSelector = createSelector(
  [flightsListSelector],
  flightsList => {
    if (flightsList.length === 0) return flightsList;
    return flightsList.body.departure;
  },
);

export const arrivalFlightsListSelector = createSelector(
  [flightsListSelector],
  flightsList => {
    if (flightsList.length === 0) return flightsList;
    return flightsList.body.arrival;
  },
);
*/
