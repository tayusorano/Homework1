import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import './index.css';
import App from './App';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';


// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Authorisation />,
//     },
//     {
//         path: '/basket',
//         element: <Basket />,
//     },
//     {
//       path: '/dish/:id',
//       element: <Dish />,
//     },
//     {
//       path: '/registration',
//       element: <Registration />,
//     },
//     {
//       path: '/menu',
//       element: <App />,
//     },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    {/* <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider> */}
  </React.StrictMode>
);


