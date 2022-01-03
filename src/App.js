import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import NavBar from "./components/NavBar";
import BottomNavbar from "./components/BottomNavbar";

function App() {
  return (
    <BrowserRouter>
      <div className="font-body">
        <NavBar />
        <div>
          {/* <div className="z-0 absolute top-28 left-32 h-72 w-72 sm:w-3/4 rounded-full bg-yellow-600 filter blur-2xl opacity-10 "></div>
          <div className="z-0 absolute top-64 -left-24 h-72 w-72 sm:3/4 rounded-full bg-yellow-400 filter blur-3xl opacity-10 "></div> */}
          <Router />
        </div>
        <BottomNavbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
