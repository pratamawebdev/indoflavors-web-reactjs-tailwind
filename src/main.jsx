import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBowlFood, faBars, faMagnifyingGlass, faCartShopping, faXmark, faTrash, faCircleChevronLeft, faFileCircleCheck, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faBowlFood, faBars, faMagnifyingGlass, faCartShopping, faXmark, faTrash, faCircleChevronLeft, faCheck, faFileCircleCheck);
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
