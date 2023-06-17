import "./App.css";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart";
import { productsData } from "./Api/Api";
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from "react-router-dom";
import Product from "./components/Product";
import Login from "./Pages/Login";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <ScrollRestoration/>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:productsData,
      },
      {
        path:'/product/:id',
        element:<Product/>
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <div className="font-bodyFont ">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
