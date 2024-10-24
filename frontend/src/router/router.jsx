import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import HomePage from '../pages/HomePage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import CategoryPage from '../pages/CategoryPage.jsx';
import SearchSection from '../sections/SearchSection.jsx';
import ShopPage from '../pages/ShopPage.jsx';



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
           path: "/shop",
           element: <ShopPage />
         },
         {
            path: "/categories/:category",
            element: <CategoryPage />
         },
         {
           path: "/search",
           element: <SearchSection />
         },
         {
            path: "/contact",
            element: <ContactPage />
         }

      ],
   },
]);






export default router;