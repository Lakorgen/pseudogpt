import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ResetLink from '../pages/ResetLink';
import ResetPassword from '../pages/ResetPassword';

import registerLoader from './loaders/registerLoader';
import loginLoader from './loaders/loginLoader';
import resetLinkLoader from './loaders/resetLinkLoader';
import resetPasswordLoader from './loaders/resetPasswordLoader';
import appLoader from './loaders/appLoader';

import registerAction from './actions/registerAction';
import loginAction from './actions/loginAction';
import resetLinkAction from './actions/resetLinkAction';
import resetPasswordAction from './actions/resetPasswordAction';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
  },
  {
    path: '/register',
    element: <Register />,
    loader: registerLoader,
    action: registerAction,
  },
  {
    path: '/login',
    element: <Login />,
    loader: loginLoader,
    action: loginAction,
  },
  {
    path: '/reset-link',
    element: <ResetLink />,
    loader: resetLinkLoader,
    action: resetLinkAction,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
    loader: resetPasswordLoader,
    action: resetPasswordAction,
  },
]);

export default router;
