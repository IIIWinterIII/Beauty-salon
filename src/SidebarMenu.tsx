import { useState } from "react";
import "./SidebarMenu.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import React from "react";


const SidebarMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => { 
    setMenuOpen(!isMenuOpen);
  };

  // Animejs


  return (
    <div className="slidebar-Menu">
      <FontAwesomeIcon icon={faBarsStaggered} onClick={toggleMenu} className="fa-bars-staggered" />
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        {isMenuOpen && (
          <div className="menu">
            <FontAwesomeIcon icon={faXmark} onClick={toggleMenu} />  
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum,
              adipiscing amet in egestas sem dui, arcu faucibus scelerisque.
              Nisl est felis id volutpat. Sed dolor fermentum amet lectus nibh
              quis. Tortor donec pellentesque leo ac placerat. Morbi.
            </p>

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
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarMenu;
