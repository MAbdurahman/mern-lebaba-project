import {createBrowserRouter} from "react-router-dom";
import App from './../app/App.js';
import HomePage from './../pages/HomePage.jsx';
import AboutPage from './../pages/AboutPage.jsx';
import ShopPage from '../pages/ShopPage';
import ContactPage from './../pages/ContactPage.jsx';
import SignInPage from './../pages/SignInPage.jsx';
import SignUpPage from '../pages/SignUpPage';
import CategoryPage from '../pages/CategoryPage';
import SingleProductComponent from './../components/products/SingleProductComponent';
import SearchSection from './../sections/SearchSection';


const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
         children: [
            {
               path: "/",
               element: <HomePage />
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
              path: "/shop/:productId",
              element: <SingleProductComponent />
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
         ]
   },
   {
      path: "/sign-in",
      element: <SignInPage />
   },
   {
      path: "/sign-up",
      element: <SignUpPage />
   }


]);

export default router;