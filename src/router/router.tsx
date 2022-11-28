import {
  createBrowserRouter,
} from "react-router-dom";

import { ErrorPage } from "../screens/ErrorScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from '../auth/screen/LoginScreen';
import { RegistroScreen } from "../auth/screen/RegistroScreen";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginScreen />,
    errorElement: <ErrorPage />
  },
  {
    path: "/registro",
    element: <RegistroScreen />,
    errorElement: <ErrorPage />
  },
]);