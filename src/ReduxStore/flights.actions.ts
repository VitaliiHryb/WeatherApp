import { fetchFlights } from '../gateway/flights-gateway';
export const FLIGHTS_LIST_RECEIVED = 'TASKS_LIST_RECEIVED';

export const flightsListReceived = (flightsList: any[], date: string) => {
  return {
    type: FLIGHTS_LIST_RECEIVED,
    payload: { flightsList, date },
  };
};

export const fetchFlightsList = (date: string) => {
  const thunkAction = (dispatch: any) => {
    fetchFlights(date).then((flightsList: any[]) => {
      dispatch(flightsListReceived(flightsList, date));
    });
  };
  return thunkAction;
};

/*
export const FLIGHTS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const flightsListRecieved = (flightsList, date) => {
  return {
    type: FLIGHTS_LIST_RECIEVED,
    payload: { flightsList, date },
  };
};

export const fetchFlightsList = date => {
  const thunkAction = dispatch => {
    fetchFlights(date).then(flightsList => {
      dispatch(flightsListRecieved(flightsList, date));
    });
  };
  return thunkAction;
};
*/
