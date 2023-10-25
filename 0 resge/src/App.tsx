import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
// import { useState } from "react";
import "./App.scss";
import Cart from "./Cart";
import Home from "./Home";
import Price from "./Price";
import Kontakt from "./Kontakt";
import SidebarMenu from "./SidebarMenu";

// Основной компонент приложения
function App() {

  return (
    
    <Router>
      <div className="container">
        <header>
          <nav>
            <ul>
              <a
                className="a-element-fa-instagram"
                href="https://www.instagram.com/"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <li>
                <Link
                  to="/"
                  className="link-buttons">
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="link-buttons"
                >
                  Мастера
                </Link>
              </li>
              <i className="fas fa-cut fa-rotate-270"></i>
              <li>
                <Link to="/price" className="link-buttons">
                  Цены
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="link-buttons">
                  Контакты
                </Link>
              </li>
              <SidebarMenu />
            </ul>
          </nav>
        </header>
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/price" element={<Price />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <footer>
          <div className="footer-content">
            <div>
              <i className="fas fa-cut fa-rotate-270"></i>
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
            </div>
            <div className="instagram">
              <p>Мы в Instagram</p>
              <a
                className="a-element-fa-instagram"
                href="https://www.instagram.com/"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </footer>
        <div className="copyright">
          <p>Copyright © 2017 - 2023</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
