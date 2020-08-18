import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "../landing-page/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={LandingPage}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
