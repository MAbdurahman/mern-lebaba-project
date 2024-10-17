import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import HomePage from '../../../backend/pages/homePage.js';

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <div>Home Page</div>,
         },

      ],
   },
]);






export default router;