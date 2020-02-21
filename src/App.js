import React from "react";
import "./App.css";
import PictureList from "./Components/PictureList";

function App() {
  return (
    <div className="App">
      <p className="Title">
        NASA Picture of the Day App
      </p>
      <PictureList/>
    </div>
  );
}


//----------------------------------------------------------------------------
//typically only one parent element gets rendered 
//------------------------------------------------------------------------------

export default App;
