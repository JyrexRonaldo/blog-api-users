import App from "./Components/App/App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import LoginForm from "./Components/LogInForm/LogInForm";


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
];

export default routes;
