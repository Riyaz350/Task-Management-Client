import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Layout/Home/Home.jsx';
import Dashboard from './Layout/Dashboard/Dashboard.jsx';
import CreateTask from './Layout/Dashboard/ModifyTask/CreateTask.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     // element: <Contact />,
    //   },
    // ],
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children: [
      {
        path: "createTask",
        element: <CreateTask></CreateTask>
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
