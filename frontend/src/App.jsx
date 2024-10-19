import { Outlet } from 'react-router-dom';
import './App.css'
import NavbarComponent from './components/NavbarComponent.jsx';
import FooterLayout from './layouts/FooterLayout.jsx'



export default function App() {
   return (
      <>
         <NavbarComponent />
         <Outlet/>
         <FooterLayout/>
      </>

   )
}