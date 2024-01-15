import { Home, Users, Products, Login } from "./pages/"
import { NavBar, Menu, Footer } from "./components/"

import "./styles/global.scss"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App