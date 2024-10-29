import {createBrowserRouter} from "react-router-dom";
import App from './../app/App.js';
import HomePage from './../pages/HomePage.jsx';




const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
         children: [
            {
               path: "/",
               element: <HomePage />
            },
         ]
   }


]);

export default router;