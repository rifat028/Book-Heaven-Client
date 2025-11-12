import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyBooks from "../Pages/MyBooks";
import AddBooks from "../Pages/AddBooks";
import AllBooks from "../Pages/AllBooks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/Register",
        Component: Register,
      },
      {
        path: "/Register",
        Component: Register,
      },
      {
        path: "/all-books",
        Component: AllBooks,
      },
      {
        path: "/my-books",
        Component: MyBooks,
      },
      {
        path: "/add-books",
        Component: AddBooks,
      },
    ],
  },
]);

export default router;
