import { Route, NavLink, Routes } from "react-router-dom";

import About from "./components/About";
import Support from "./components/Support";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage";
import MainHeader from "./components/MainHeader";

import "./App.css";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          {/* Default Route */}
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/labs" element={<Labs />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
