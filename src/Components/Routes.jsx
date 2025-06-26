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
import ErrorPage from './ErrorPage/ErrorPage';
import DashBoard from '../Pages/DashBoard/DashBoard';
import OverView from '../Pages/DashBoard/OverView/OverView';
import UserCreateGroups from '../Pages/DashBoard/UserCreateGroups/UserCreateGroups';
import AllGroupsTable from '../Pages/DashBoard/AllGroupsTable/AllGroupsTable';
import UserDetails from '../Pages/DashBoard/UserDetails/UserDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: ({ params }) => fetch(`https://assignment-10-hobby-server.vercel.app/hobbies/${params.id}`)
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
        loader: () => fetch('https://assignment-10-hobby-server.vercel.app/hobbies')
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
        loader: ({ params }) => fetch(`https://assignment-10-hobby-server.vercel.app/hobbies/${params.id}`)

      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>,
        children:[
          {
            index: true,
            element: <OverView></OverView>
          },
          {
            path: 'usersGroup',
            element: <UserCreateGroups></UserCreateGroups>
          },
          {
            path: 'allGroups',
            element: <AllGroupsTable></AllGroupsTable>
          },
          {
            path: 'userDetails',
            element: <UserDetails></UserDetails>
          }
        ]
      }
    ]
  },
]);


export default router;