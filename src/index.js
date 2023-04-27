import React from "react";
import ReactDom from 'react-dom';

function Hello() {
    return <h1>Hello react</h1>
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Hello />);