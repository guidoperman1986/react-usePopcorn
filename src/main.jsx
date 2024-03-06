import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ShowRating } from "./components/ShowRating.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ShowRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={5}
    />
    <ShowRating maxRating={5} color={"crimson"} size={25} /> */}
    <App />
  </React.StrictMode>
);
