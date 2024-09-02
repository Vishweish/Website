import "./index.css"
import React from "react";
import ReactDOM from "react-dom"
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Body from "./component/body/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Help from "./component/help/Help";
import ErrorPage from "./component/errorPage/ErrorPage";
import ProductDetail from "./component/inProduct/ProductDetail";
import ProductPage from "./component/productPage/ProductPage";
import Home from "./component/home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Outlet /> 
            </div>
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/", // Root path
        element: <AppLayout />,
        children: [
            {
                path: "/home", // Render the Body component at the root path
                element: <Home />,
            },
            {
                path: "/products", // Products page
                element: <ProductPage />, // This will be the new product page component
            },
            {
                path: "/help",
                element: <Help />,
            },
            {
                path: "/product/:id", // Route for product details
                element: <ProductDetail />,
            },
        ],
        errorElement: <ErrorPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
