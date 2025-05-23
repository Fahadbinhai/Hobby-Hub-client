import React from 'react';
import {
  createBrowserRouter
} from "react-router";
import MainPage from './MainPage/MainPage';
import HomePage from '../Pages/HomePage';
import FeatureDetails from '../Pages/FeatureDetails/FeatureDetails';
import CreateHobbyGroup from '../Pages/CreateHobbyGroup/CreateHobbyGroup';
import AllGroups from '../Pages/AllGroups/AllGroups';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import MyGroups from '../Pages/MyGroups/MyGroups';
import UpdateGroup from '../Pages/UpdateGroup/UpdateGroup';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
    children: [
      {
        path: '/',
        Component: HomePage
      },
      {
        path: 'feature-details/:id',
        // Component: FeatureDetails,
        element: <PrivateRoute>
          <FeatureDetails></FeatureDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/hobbies/${params.id}`)
      },
      {
        path: 'new-hobby-group',
        // Component: CreateHobbyGroup
        element: <PrivateRoute>
          <CreateHobbyGroup></CreateHobbyGroup>
        </PrivateRoute>
      },
      {
        path: 'all-group',
        Component: AllGroups,
        loader: () => fetch('http://localhost:3000/hobbies')
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'my-groups',
        // Component: MyGroups
        element: <PrivateRoute>
          <MyGroups></MyGroups>
        </PrivateRoute>
      },
      {
        path: 'update-group/:id',
        // Component: UpdateGroup,
        element: <PrivateRoute>
          <UpdateGroup></UpdateGroup>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/hobbies/${params.id}`)

      }
    ]
  },
]);


export default router;