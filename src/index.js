import React from "react";
import ReactDom from 'react-dom';
import FirstComponent from "./FirstComponent";

//by NibblesTuffy-v1
function Hello() {
    return <>
        <h1>Hello react</h1>
        <FirstComponent />
    </>
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Hello />);