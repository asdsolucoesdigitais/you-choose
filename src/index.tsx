import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import YouChoose from "./pages/youchoose";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <YouChoose />
    </React.StrictMode>
);