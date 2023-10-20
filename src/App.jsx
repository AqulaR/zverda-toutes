import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as React from "react";
import { useRoutes } from "react-router-dom";
import MainPage from './mainPage';
import AboutPage from './about'
import DocumentsPage from './documentsPage';
import Activity from './Activity';

function App() {
  const route = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/activity",
      element: <Activity />,
    },
    {
      path: "/documents",
      element: <DocumentsPage />,
    },
  ])

  return route

}

export default App
