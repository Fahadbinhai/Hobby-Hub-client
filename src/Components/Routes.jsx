import React from 'react';
import {
  createBrowserRouter
} from "react-router";
import MainPage from './MainPage/MainPage';
import HomePage from '../Pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
    children:[
      {
        path:'/',
        Component:HomePage
      }
    ]
  },
]);


export default router;