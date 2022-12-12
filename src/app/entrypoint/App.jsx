import React from 'react';
import { Counter } from '../features/Counter';
import { Footer } from '../components/Footer';
import './App.css';

export const App = () => (
  <div className='App'>
    <header className='App-header'>
      <Counter />
      <Footer />
    </header>
  </div>
);
