import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Homepage/Homepage';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: "/*",
        element: <NotFound />
      }
    ],
  },
]);