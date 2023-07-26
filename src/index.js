import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme'
import Offers from './pages/Offers';
import BulkOrder from './pages/BulkOrder';
import Delivery from './pages/Delivery';
import Categories from './pages/Categories/Categories';


// creating the first route;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'categories',
        element: <Categories />
      },
      {
        path: 'offers',
        element: <Offers />
      },
      {
        path: 'bulk-orders',
        element: <BulkOrder />
      },
      {
        path: 'delivery',
        element: <Delivery />
      },
    ]
  },
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

