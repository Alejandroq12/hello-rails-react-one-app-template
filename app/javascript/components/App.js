import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeting from './Greeting.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Greeting />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
