import { Route, Link, Routes, useLocation } from "react-router-dom"; 
import Cart from "./Cart.tsx";
import Home from "./Home.tsx";
import Price from "./Price.tsx";
import Kontakt from "./Kontakt.tsx";
import SidebarMenu from "./SidebarMenu.tsx";
import "./App.scss";
import React from "react";

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
                to="/kontakt"
                className={
                  "link-buttons " + (activeTabs["/kontakt"] ? "active" : "")
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
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/price" element={<Price />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <footer>
        <div className="footer-content">
          <div>
          <FontAwesomeIcon icon={faScissors} rotation={270} className="fa-cut" />
          </div>
          <div className="contact">
            <p>Контакты</p>
            <p>+7 (ххх) ххх-хх-хх</p>
            <p>+7 (ххх) ххх-хх-хх</p>
            <p>г. Москва, ул. ххххх, дом х</p>
          </div>
          <div className="opening-hours">
            <p>Режим работы</p>
            <p>С 10:00 до 21:00 (Пн-Пт)</p>
            <p>С 11:00 до 20:00 (Сб-Вс)</p>
            <p>С 13:00 до 14:00 (Обед)</p>
          </div>
          <div className="instagram">
            <p>Мы в Instagram</p>
            <a
              className="a-element-fa-instagram"
              href="https://www.instagram.com/"
            >
              <FontAwesomeIcon icon={faInstagram} className="instagram" />
            </a>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>Copyright © 2017 - 2023</p>
      </div>
    </div>
  );
}

export default App;
