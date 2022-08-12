import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CheckinContextProvider from "./context/CheckinContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CheckinContextProvider>
            <App />
        </CheckinContextProvider>
    </React.StrictMode>
);
