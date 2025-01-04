import React from "react";

import "./App.css";

import { Route, Link, Routes, useLocation } from "react-router-dom"; 

import SidebarMenu from "./SidebarMenu.tsx";
import routes from "./routes.ts"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
 

const activeTabs: { [k: string]: boolean } = {
  "/": false,
  "/cart": false,
  "/price": false,
  "/kontakt": false,
};

// Основной компонент приложения
function App() {
  const location = useLocation();
  const pathname = location.pathname;

  for (const key in activeTabs) {
    activeTabs[key] = false;
  }
  activeTabs[pathname] = true;

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <a
              className="a-element-fa-instagram"
              href="https://www.instagram.com/"
            >
              <FontAwesomeIcon icon={faInstagram} className="instagram" />
            </a>
            <li
              className={"li-hover " + (activeTabs["/"] ? "activemobile" : "")}
            >
              <Link
                to="/"
                className={"link-buttons " + (activeTabs["/"] ? "active" : "")}
              >
                Главная
              </Link>
            </li>
            <li
              className={
                "li-hover " + (activeTabs["/cart"] ? "activemobile" : "")
              }
            >
              <Link
                to="/cart"
                className={
                  "link-buttons " + (activeTabs["/cart"] ? "active" : "")
                }
              >
                Мастера
              </Link>
            </li>
            <FontAwesomeIcon icon={faScissors} rotation={270} className="fa-cut" />
            <li
              className={
                "li-hover " + (activeTabs["/price"] ? "activemobile" : "")
              }
            >
              <Link
                to="/price"
                className={
                  "link-buttons " + (activeTabs["/price"] ? "active" : "")
                }
              >
                Цены
              </Link>
            </li>
            <li
              className={
                "li-hover " + (activeTabs["/kontakt"] ? "activemobile" : "")
              }
            >
              <Link
                to="/contact"
                className={
                  "link-buttons " + (activeTabs["/contact"] ? "active" : "")
                }
              >
                Контакты
              </Link>
            </li>
            <SidebarMenu />
          </ul>
        </nav>
      </header>
      <Routes>
        {routes.map(({path, component: Component}, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
      
      
    </div>
  );
}

export default App;
