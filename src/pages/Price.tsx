// import { useState } from "react";
import React from "react";
import "../styles/pages/Price.scss";

// img
import image from "./img/image.jpeg";

function Price() {
  return (
    <div className="price-container">
      <h1>Цены на услуги</h1>
      <div className="price-card">
        <img src={image} alt="hairdressing services" />
        <div className="price-card-text-block">
          <div className="price-card-text">
            <div className="two-p-element">
              <p>Женская укладка</p>
              <p>1 000 ₽</p>
            </div>
            <p>+ обработк кончинков волос</p>
          </div>
          <div className="price-card-text">
            <div className="two-p-element">
              <p>Женская укладка</p>
              <p>1 000 ₽</p>
            </div>
            <p>+ обработк кончинков волос</p>
          </div>
          <div className="price-card-text">
            <div className="two-p-element">
              <p>Женская укладка</p>
              <p>1 000 ₽</p>
            </div>
            <p>+ обработк кончинков волос</p>
          </div>
          <div className="price-card-text">
            <div className="two-p-element">
              <p>Женская укладка</p>
              <p>1 000 ₽</p>
            </div>
            <p>+ обработк кончинков волос</p>
          </div>
        </div>
      </div>
      <div className="price-card">
        <img src={image} alt="hairdressing services" />
        <div className="price-card-text-block">
          <div className="price-card-text">
            <div className="two-p-element">
              <p>Женская укладка</p>
              <p>1 000 ₽</p>
            </div>
            <p>+ обработк кончинков волос</p>
          </div>
          <div className="price-card-text">
            <div className="two-p-element">
              <p>Женская укладка</p>
              <p>1 000 ₽</p>
            </div>
            <p>+ обработк кончинков волос</p>
          </div>
          <div className="price-card-text">
            <div className="two-p-element">
              <p>Женская укладка</p>
              <p>1 000 ₽</p>
            </div>
            <p>+ обработк кончинков волос</p>
          </div>
          <div className="price-card-text">
            <div className="two-p-element">
              <p>Женская укладка</p>
              <p>1 000 ₽</p>
            </div>
            <p>+ обработк кончинков волос</p>
          </div>
        </div>
      </div>
      <div className="price-card">
        <img src={image} alt="hairdressing services" />
        <div className="price-card-text-block">
          <div className="price-card-text">
            <div className="two-p-element">
              <p>Женская укладка</p>
              <p>1 000 ₽</p>
            </div>
            <p>+ обработк кончинков волос</p>
          </div>
          <div className="price-card-text">
            <div className="two-p-element">
              <p>Женская укладка</p>
              <p>1 000 ₽</p>
            </div>
            <p>+ обработк кончинков волос</p>
          </div>
          <div className="price-card-text">
            <div className="two-p-element">
              <p>Женская укладка</p>
              <p>1 000 ₽</p>
            </div>
            <p>+ обработк кончинков волос</p>
          </div>
          <div className="price-card-text">
            <div className="two-p-element">
              <p>Женская укладка</p>
              <p>1 000 ₽</p>
            </div>
            <p>+ обработк кончинков волос</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
