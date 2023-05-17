import { FLIGHTS_LIST_RECEIVED } from './flights.actions';

interface FlightsState {
  flightsList: any[]; // Replace 'any' with the appropriate type for flightsList items
  date: string | null;
}

interface FlightsListReceivedAction {
  type: typeof FLIGHTS_LIST_RECEIVED;
  payload: {
    flightsList: any[]; // Replace 'any' with the appropriate type for flightsList items
    date: string;
  };
}

type FlightsAction = FlightsListReceivedAction;

const initialState: FlightsState = {
  flightsList: [],
  date: null,
};

const flightsReducer = (
  state: FlightsState = initialState,
  action: FlightsAction,
): FlightsState => {
  switch (action.type) {
    case FLIGHTS_LIST_RECEIVED:
      return {
        ...state,
        flightsList: action.payload.flightsList,
        date: action.payload.date,
      };
    default:
      return state;
  }
};

export default flightsReducer;

/*
const initialState = {
  flightsList: [],
  date: null,
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIEVED:
      return {
        ...state,
        flightsList: action.payload.flightsList,
        date: action.payload.date,
      };
    default:
      return state;
  }
};

export default flightsReducer;
*/
