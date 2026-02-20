import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../Components/Header";
import "./index.css";
import Middle from "../Components/Middle";


function App(){
    return(
        <>
        <Header></Header>
        <Middle></Middle>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);