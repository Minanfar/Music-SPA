import React from "react";
import "../sass/App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
