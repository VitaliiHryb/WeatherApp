import './index.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Page from './components/page';

function App() {
  return <Page />;
}

export default App;

/*
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </Provider>
  );
}
*/
