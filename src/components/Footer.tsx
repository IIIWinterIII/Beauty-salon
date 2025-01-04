import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
    return (
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
        <div className="copyright">
        <p>Copyright © 2017 - 2023</p>
      </div>
      </footer>
    );
}

export default Footer;