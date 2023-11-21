import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from 'react-bootstrap'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import Menu from './components/menu';
import Footer from './components/footer'

import Home from './components/home';
import About from './components/about'
import Editions from './components/editions'

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "sobre",
    element: <About />,
  },
  {
    path: "edicoes",
    element: <Editions />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container>
    <Header />
    <Menu />
    <RouterProvider router={router} />
    <Footer />
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
