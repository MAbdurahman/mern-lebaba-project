import React from 'react';
import {Outlet} from 'react-router-dom';
import './App.css';
import NavbarComponent from '../components/NavbarComponent';
import Footer from './../layouts/Footer';



export default function App() {

  return (
    <>
      <NavbarComponent />
      <Outlet />
       <Footer />
    </>

  );
}