// vendors
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// views
import { Counter } from '../../views/counter';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Counter />,
  },
]);
