import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "../Components/HomePage/HomePage";
import {BrowserRouter, Routes, Route} from "react-router"
import FoodDelivery from "../Components/FoodDelivery/FoodDelivery";
import RestaurantMenu from "../Components/RestaurantMenu/RestaurantMenu";



function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/restaurants" element={<FoodDelivery></FoodDelivery>}></Route>
            <Route path="/city/Delhi/:rest" element={<RestaurantMenu></RestaurantMenu>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);