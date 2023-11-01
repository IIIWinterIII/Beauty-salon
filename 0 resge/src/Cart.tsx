// import { useState } from 'react';
import "./App.scss"

// Компонент для отображения содержимого корзины
function Cart() {
  
    return (
      <div className="master-list-container">
        <h1>
          Наши мастера
        </h1>
        <div className="master-list-img">
          <div className="master-list-img-block">
            <img src="src\img\item (1).jpg" alt="" />
            <p>Елена Васильевна</p>
            <p>Визажист</p>
          </div>
          <div className="master-list-img-block">
            <img src="src\img\item (2).jpg" alt="" />
            <p>Елена Васильевна</p>
            <p>Визажист</p>
          </div>
          <div className="master-list-img-block">
            <img src="src\img\item (3).jpg" alt="" />
            <p>Елена Васильевна</p>
            <p>Визажист</p>
          </div>
          <div className="master-list-img-block">
            <img src="src\img\item (1).jpg" alt="" />
            <p>Елена Васильевна</p>
            <p>Визажист</p>
          </div>
          <div className="master-list-img-block">
            <img src="src\img\item (5).jpg" alt="" />
            <p>Елена Васильевна</p>
            <p>Визажист</p>
          </div>
          <div className="master-list-img-block">
            <img src="src\img\item (6).jpg" alt="" />
            <p>Елена Васильевна</p>
            <p>Визажист</p>
          </div>
        </div>
      </div>
    );
  }
  

  export default Cart;