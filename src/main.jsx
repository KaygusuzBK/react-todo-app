import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/output.css";
import routes from "./routes/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
