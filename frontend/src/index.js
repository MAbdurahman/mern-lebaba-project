import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import router from './router/router.jsx';
import './index.css';
import 'remixicon/fonts/remixicon.css';
import {Provider} from 'react-redux';
import {store} from './redux/store.js';
import NotificationProvider from './context/notificationContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <NotificationProvider>
         <RouterProvider router={router} />
      </NotificationProvider>
   </Provider>
);