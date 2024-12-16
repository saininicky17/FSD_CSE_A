import React, { useState } from "react";
import Login from "./Login";
import Mainlayout from "./Mainlayout";
import Registration from "./Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [rdata, setrdata] = useState();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Mainlayout></Mainlayout>} />
          <Route
            path="/registration"
            element={<Registration regData={setrdata} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
