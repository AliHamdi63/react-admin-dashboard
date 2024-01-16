import { Home, Users, Products, Login, User, Product } from "./pages/"
import { NavBar, Menu, Footer } from "./components/"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import "./styles/global.scss"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const queryClient = new QueryClient();

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
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
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
          path: "/users/:id",
          element: <User />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/products/:id",
          element: <Product />
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