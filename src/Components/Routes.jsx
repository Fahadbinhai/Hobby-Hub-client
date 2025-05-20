import React from 'react';
import {
  createBrowserRouter
} from "react-router";
import MainPage from './MainPage/MainPage';
import HomePage from '../Pages/HomePage';
import FeatureDetails from '../Pages/FeatureDetails/FeatureDetails';
import CreateHobbyGroup from '../Pages/CreateHobbyGroup/CreateHobbyGroup';

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
      }
    ]
  },
]);


export default router;