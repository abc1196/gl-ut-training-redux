// vendors
import React from 'react';

export const Footer = () => (
  <div data-testid='footer-container'>
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <span>
      <span>Learn </span>
      <a
        className='App-link'
        data-testid='react-link'
        href='https://reactjs.org/'
        target='_blank'
        rel='noopener noreferrer'
      >
        React
      </a>
      <span>, </span>
      <a
        className='App-link'
        data-testid='redux-link'
        href='https://redux.js.org/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Redux
      </a>
      <span>, </span>
      <a
        className='App-link'
        data-testid='redux-toolkit-link'
        href='https://redux-toolkit.js.org/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Redux Toolkit
      </a>
      ,<span> and </span>
      <a
        className='App-link'
        data-testid='react-redux-link'
        href='https://react-redux.js.org/'
        target='_blank'
        rel='noopener noreferrer'
      >
        React Redux
      </a>
    </span>
  </div>
);
