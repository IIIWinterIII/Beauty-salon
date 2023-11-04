// import { useState } from 'react';
import React from "react";
import "./App.scss"

// img
import img_item_1 from "./img/item(1).jpeg"
import img_item_2 from "./img/item(2).jpeg"
import img_item_3 from "./img/item(3).jpeg"
import img_item_4 from "./img/item(4).jpeg"
import img_item_5 from "./img/item(5).jpeg"
import img_item_6 from "./img/item(6).jpeg"

// Компонент для отображения содержимого корзины
function Cart() { 
  
    return (
      <div className="master-list-container">
        <h1>
          Наши мастера
        </h1>
        <div className="master-list-img">
          <div className="master-list-img-block">
            <img src={img_item_1} alt="makeup artist" />
            <p>Елена Васильевна</p>
            <p>Визажист</p>
          </div>
          <div className="master-list-img-block">
            <img src={img_item_2} alt="makeup artist" />
            <p>Елена Васильевна</p>
            <p>Визажист</p>
          </div>
          <div className="master-list-img-block">
            <img src={img_item_3} alt="makeup artist" />
            <p>Елена Васильевна</p>
            <p>Визажист</p>
          </div>
          <div className="master-list-img-block">
            <img src={img_item_4} alt="makeup artist" />
            <p>Елена Васильевна</p>
            <p>Визажист</p>
          </div>
          <div className="master-list-img-block">
            <img src={img_item_5} alt="makeup artist" />
            <p>Елена Васильевна</p>
            <p>Визажист</p>
          </div>
          <div className="master-list-img-block">
            <img src={img_item_6} alt="makeup artist" />
            <p>Елена Васильевна</p>
            <p>Визажист</p>
          </div>
        </div>
      </div>
    );
  }
  

  export default Cart;