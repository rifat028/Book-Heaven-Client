import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyBooks from "../Pages/MyBooks";
import AddBooks from "../Pages/AddBooks";
import AllBooks from "../Pages/AllBooks";
import Layout from "../Layout/Layout";
import BookDetails from "../Pages/BookDetails";
import PrivateRoutes from "./PrivateRoutes";
import PageNotFound from "../Components/PageNotFound";
import BookNotFound from "../Components/BookNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        path: "/",
        loader: () =>
          fetch("https://backup-server-book-heaven.onrender.com/books/latest"),
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/Register",
        Component: Register,
      },
      {
        path: "/all-books",
        loader: () =>
          fetch("https://backup-server-book-heaven.onrender.com/books"),
        Component: AllBooks,
      },
      {
        path: "/all-books/:id",
        loader: ({ params }) =>
          fetch(
            `https://backup-server-book-heaven.onrender.com/books/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <BookDetails></BookDetails>
          </PrivateRoutes>
        ),
        errorElement: <BookNotFound></BookNotFound>, //not working in this case. See BookDetails.jsx
      },
      {
        path: "/my-books",
        loader: ({ request }) => {
          const url = new URL(request.url);
          const email = url.searchParams.get("userEmail");
          // console.log("Loader email:", email);
          return fetch(
            `https://backup-server-book-heaven.onrender.com/books?userEmail=${email}`
          ).then((res) => res.json());
        },
        element: (
          <PrivateRoutes>
            <MyBooks></MyBooks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-books",
        element: (
          <PrivateRoutes>
            <AddBooks></AddBooks>
          </PrivateRoutes>
        ),
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);

export default router;
