import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router';
import Navbar from './components/shared/Navbar';
import Rootlayout from './layout/Rootlayout'
const router = createBrowserRouter ([
  {
    path: "/",
    components: Rootlayout,
    children : [
      {
        index : true,
        element :<p>homepage</p>
      }
    ]
  },
  {
    path: "/apps",
    element :<h2>All apps</h2>

  }
]);
  
         

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      <RouterProvider router={router} />,
  </StrictMode>,
);
