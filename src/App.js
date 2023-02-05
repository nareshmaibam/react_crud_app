import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Add from "./component/Add";
import Update from "./component/Update";
import View from "./component/View";
import Delete from "./component/Delete";
function App() {
  
  return (
    <>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to={"/add"}>Add</Link>
            </li>
            <li>
              <Link to={"/view"}>View</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<View />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
