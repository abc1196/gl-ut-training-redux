import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../entrypoint';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const defaultStore = mockStore(store);

export const renderWithProviders = (
  // Component to render and test
  ui,
  {
    // Automatically create a store instance if no store was passed in
    store = defaultStore,
    // Render method extra props. You can see them in detail here:
    // https://testing-library.com/docs/react-testing-library/api/#render-options
    ...renderOptions
  } = {},
) => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
