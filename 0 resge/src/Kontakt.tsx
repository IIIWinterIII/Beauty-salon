// import { useState } from "react";
import "./App.scss";

function Kontakt() {
  return (
    <div className="kontakt-container">
      <h1>Контакты</h1>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511641.85856666724!2d29.433995621230263!3d59.93876256253981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1697638875123!5m2!1sru!2sru"
          width="600"
          height="450"
          style={{
            width: "100%",
            height: "500px",
            border: "none",
          }}
          loading="lazy"
          referrerPolicy={"no-referrer-when-downgrade"}
        ></iframe>
      </div>
      <div className="contakt-block-main">
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
    </div>
  );
}

export default Kontakt;
