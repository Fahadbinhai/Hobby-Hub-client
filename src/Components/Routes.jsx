import React from 'react';
import {
  createBrowserRouter
} from "react-router";
import MainPage from './MainPage/MainPage';
import HomePage from '../Pages/HomePage';
import FeatureDetails from '../Pages/FeatureDetails/FeatureDetails';
import CreateHobbyGroup from '../Pages/CreateHobbyGroup/CreateHobbyGroup';
import AllGroups from '../Pages/AllGroups/AllGroups';

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
        Component: FeatureDetails,
        loader: () => fetch('/dummyData.json')
      },
      {
        path: 'new-hobby-group',
        Component: CreateHobbyGroup
      },
      {
        path: 'all-group',
        Component:AllGroups
      }
    ]
  },
]);


export default router;