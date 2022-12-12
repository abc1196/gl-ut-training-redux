// vendors
import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

// routes
import { router } from './router';

export const Routes = () => (
  <Suspense fallback={<div />}>
    <RouterProvider router={router} />
  </Suspense>
);
