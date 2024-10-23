import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import HomePage from '../pages/HomePage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import CategoryPage from '../pages/CategoryPage.jsx';


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
         {
            path: "/categories/:category",
            element: <CategoryPage />
         },

      ],
   },
]);






export default router;