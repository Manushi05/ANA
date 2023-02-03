import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
function App() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/p1">Page 1</Link>
            </li>
            <li>
              <Link to="/p2">Page 2</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/p1" element={<Page1 />}></Route>
            <Route exact path="/p2" element={<Page2 />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
