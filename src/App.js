import './App.css';
import Header from "./Components/Header/Header";
import BestSellers from "./Components/BestSellers/BestSellers";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Product from "./Components/Product/Product";
import React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BestSellers/>,
    },
    {
        path: "/product/:productId",
        element: <Product/>,
    },
]);

function App() {
    return (
        <div className="App">
            <Header/>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
