import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router';
import Navbar from './components/shared/Navbar';
import Rootlayout from './layout/Rootlayout'
import FriendDetail from './layout/Friendsdetail';
import Home from './pages/homepage/Homepage';
const router = createBrowserRouter ([
  {
    path: "/",
    Component: Rootlayout,
    children : [
      {
        index : true,
        element : <Home/> },   
      {
        path : "friend/:id",
        element :<FriendDetail />,
        loader : () => fetch(`/friends.json`)},
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
