import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="font-body ">
        <NavBar />
        <div className="bg-neutral-20 overflow-hidden">
          {/* <div className="absolute top-28 left-32 h-72 w-72 rounded-full bg-yellow-600 filter blur-xl opacity-10"></div>
          <div className="absolute top-64 -left-24 h-72 w-72 rounded-full bg-yellow-400 filter blur-xl opacity-10"></div> */}
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
