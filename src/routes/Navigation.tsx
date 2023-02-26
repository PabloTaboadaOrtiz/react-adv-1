import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((navEl, i) => (
                <li key={i}>
                  <NavLink
                    to={navEl.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {navEl.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            {routes.map((routeEl) => (
              <Route key={routeEl.path} path={routeEl.path} element={<routeEl.Component />}></Route>
            ))}
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
