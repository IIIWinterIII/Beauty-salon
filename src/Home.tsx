import { useState } from "react";
import "./App.scss";
import ScrollToTopButton from "./ScrollToTopButton.tsx";

// import anime from 'animejs';

function Home() {
  //==========================================================

  type PhotoCategory = "all" | "haircut" | "manicure" | "make-up";

  const [selectedCategory, setSelectedCategory] =
    useState<PhotoCategory>("all");
  const photos: Record<PhotoCategory, string[]> = {
    all: [
      "../../img/work-1.png",
      "/img/work-2.png",
      "../img/work-3.png",
      "img/work-4.png",
      "./img/work-5.png",
      "././img/work-6.png",
      "../../img/work-7.png",
      "../../img/work-8.png",
      "../../img/work-9.png",
    ],

    haircut: [
      "../../img/photo-1.jpg",
      "../../img/photo-1.jpg",
      "../../img/photo-1.jpg",
      "../../img/photo-1.jpg",
      "../../img/photo-1.jpg",
      "../../img/photo-1.jpg",
      "../../img/photo-1.jpg",
      "../../img/photo-1.jpg",
      "../../img/photo-1.jpg",
    ],
    manicure: [
      "../../img/photo-2.jpg",
      "../../img/photo-2.jpg",
      "../../img/photo-2.jpg",
      "../../img/photo-2.jpg",
      "../../img/photo-2.jpg",
      "../../img/photo-2.jpg",
      "../../img/photo-2.jpg",
      "../../img/photo-2.jpg",
      "../../img/photo-2.jpg",
    ],
    "make-up": [
      "../../img/photo-3.jpg",
      "../../img/photo-3.jpg",
      "../../img/photo-3.jpg",
      "../../img/photo-3.jpg",
      "../../img/photo-3.jpg",
      "../../img/photo-3.jpg",
      "../../img/photo-3.jpg",
      "../../img/photo-3.jpg",
      "../../img/photo-3.jpg",
    ],
  };

  const handleCategoryChange = (category: PhotoCategory): void => {
    setSelectedCategory(category);
  };
  return (
    <div className="home-container">
      <div className="salon-info">
        <div className="text-h1">
          <h1>Салон красоты «Delote-Beauty» на Крестовском</h1>
        </div>
        <div className="computer-mouse-and-text">
          <i className="fa-solid fa-computer-mouse"></i>
          <p>Прокрутите вниз</p>
        </div>
      </div>
      <div className="main-content">
        <div className="quote-container">
          <i className="fa-solid fa-quote-right"></i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu
            nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque
            accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada
            sociis tristique. Viverra augue lorem ut quisque quam tortor,
            malesuada iaculis.
          </p>
          <p>
            Et elementum at nulla venenatis, faucibus integer. Auctor neque
            eros, viverra rutrum. Fames ultrices condimentum tortor nec
            penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.
          </p>
        </div>
        <div className="services-list">
          <div className="list-num-1">
            <img
              src="https://amiel.club/uploads/posts/2022-03/1647781651_5-amiel-club-p-parikmakherskie-uslugi-kartinki-5.jpg"
              alt="Парикмахер красит волосы кисточкой"
            />
            <p>Парикмахерские услуги</p>
          </div>
          <div className="list-num-1">
            <img
              src="https://img.freepik.com/free-photo/high-angle-woman-doing-the-manicure-of-a-client_23-2148697080.jpg?size=626&ext=jpg"
              alt="Парикмахер красит волосы кисточкой"
            />
            <p>Маникюр</p>
          </div>
          <div className="list-num-1">
            <img
              src="https://img.freepik.com/free-photo/woman-s-feet-in-bowl-with-water-and-petal_329181-18808.jpg?size=626&ext=jpg"
              alt="Парикмахер красит волосы кисточкой"
            />
            <p>Педикюр</p>
          </div>
          <div className="list-num-1">
            <img
              src="https://img.freepik.com/free-photo/cosmetologist-doing-face-treatment-and-applying-face-mask_1303-28042.jpg?size=626&ext=jpg"
              alt="Парикмахер красит волосы кисточкой"
            />
            <p>Косметология</p>
          </div>
          <div className="list-num-1">
            <img
              src="https://img.freepik.com/free-photo/macadamia-body-lotion-skin-cream_1150-42805.jpg?size=626&ext=jpg"
              alt="Парикмахер красит волосы кисточкой"
            />
            <p>Эстетист по телу</p>
          </div>
          <div className="list-num-1">
            <img
              src="https://img.freepik.com/free-photo/close-up-collection-of-make-up-and-beauty-products_23-2148620012.jpg?size=626&ext=jpg"
              alt="Парикмахер красит волосы кисточкой"
            />
            <p>Визаж</p>
          </div>
        </div>
        <div className="logos-list">
          <img src="../src/logo/image_3_Traced.png" alt="Kevin.Murphy" />
          <img src="./src/logo/image_4_Traced.png" alt="Oribe" />
          <img src="././logo/image_5_Traced.png" alt="Alterna" />
          <img src="/src/logo/image_6_Traced.png" alt="Aldo Coppola" />
        </div>
        <div className="our-works-container">
          <h1>Наши работы</h1>
          <div className="buttons-category">
            <button
              className={
                "buttons-card " + (selectedCategory === "all" ? "active" : "")
              }
              onClick={() => handleCategoryChange("all")}
            >
              Показать все
            </button>
            <button
              className={
                "buttons-card " +
                (selectedCategory === "haircut" ? "active" : "")
              }
              onClick={() => handleCategoryChange("haircut")}
            >
              Парикмахерские услуги
            </button>
            <button
              className={
                "buttons-card " +
                (selectedCategory === "manicure" ? "active" : "")
              }
              onClick={() => handleCategoryChange("manicure")}
            >
              Маникюр
            </button>
            <button
              className={
                "buttons-card " +
                (selectedCategory === "make-up" ? "active" : "")
              }
              onClick={() => handleCategoryChange("make-up")}
            >
              Визаж
            </button>
          </div>
          <div className="our-works-photos">
            {photos[selectedCategory].map((photo, index) => (
              <img key={index} src={photo} alt="" />
            ))}
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default Home;
