import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RootLayout from './layout/Rootlayout'
import { createBrowserRouter, RouterProvider } from 'react-router';


const router = createBrowserRouter ([
   {
    path : "/",
    element : <RootLayout/>,
    children: [
      {
       //path : "/",
       index: true,
        element : <h2>Homepage</h2>,
      },
      {
        path : "/app",
        element : <h2> Apps</h2>,
     },
     {
        path : "/installedApps",
        element : <h2>Installed Apps</h2>
     }
     ],
     errorElement : <h2>404 Not Found</h2>,
   },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      <RouterProvider router={router} />,
  </StrictMode>,
);
