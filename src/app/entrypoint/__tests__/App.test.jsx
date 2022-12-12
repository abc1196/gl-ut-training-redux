// vendors
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

// components
import { App } from '../App';

// redux
import { store } from '../store';

describe('App', () => {
  it('renders learn react link', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(screen.getByText(/learn/i)).toBeInTheDocument();
  });
});
