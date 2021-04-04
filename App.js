import React from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import store from './src/redux/store';
// navigation
import Route from './src/routes/Routes';

const App = () => {
  return (
    <Provider store={store}>
    <Root>
      <Route />
    </Root>
    </Provider>
  )
}

export default App