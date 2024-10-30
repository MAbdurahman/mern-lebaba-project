import React from 'react';
import {Outlet} from 'react-router-dom';
import './App.css';
import NavbarComponent from '../components/NavbarComponent';
import FooterLayout from '../layouts/FooterLayout';



export default function App() {

  return (
    <>
      <NavbarComponent />
      <Outlet />
       <FooterLayout />
    </>

  );
}