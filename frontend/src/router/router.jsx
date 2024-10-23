import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import HomePage from '../pages/HomePage.jsx';
import AboutPage from '../pages/AboutPage.jsx';


const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <HomePage />,
         },
         {
            path: "/about",
            element: <AboutPage />
         },
         /*{
            path: "/categories/:category",
            element:
         },*/

      ],
   },
]);






export default router;