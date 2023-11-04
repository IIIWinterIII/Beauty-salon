import { useState } from "react";
import "./App.scss";
import ScrollToTopButton from "./ScrollToTopButton.tsx";
import React from "react";
// logo
import image_3 from "./logo/image_3_Traced.webp";
import image_4 from "./logo/image_4_Traced.webp";
import image_5 from "./logo/image_5_Traced.webp";
import image_6 from "./logo/image_6_Traced.webp";
// image
import work_1 from "./img/work-1.jpeg";
import work_2 from "./img/work-2.jpeg";
import work_3 from "./img/work-3.jpeg";
import work_4 from "./img/work-4.jpeg";
import work_5 from "./img/work-5.jpeg";
import work_6 from "./img/work-6.jpeg";
import work_7 from "./img/work-7.jpeg";
import work_8 from "./img/work-8.jpeg";
import work_9 from "./img/work-9.jpeg";
import photo_1 from "./img/photo-1.jpeg";
import photo_2 from "./img/photo-2.jpeg";
import photo_3 from "./img/photo-3.jpeg";

function Home() {
  //==========================================================

  type PhotoCategory = "all" | "haircut" | "manicure" | "make-up";

  const [selectedCategory, setSelectedCategory] =
    useState<PhotoCategory>("all");
  const photos: Record<PhotoCategory, { src: string; alt: string }[]> = {
    all: [
      { src: work_1, alt: "photo of the hairdresser's work" },
      { src: work_2, alt: "beautician's photo" },
      { src: work_3, alt: "manicure photo" },
      { src: work_4, alt: "photo of the hairdresser's work" },
      { src: work_5, alt: "photo of the hairdresser's work" },
      { src: work_6, alt: "beautician's photo" },
      { src: work_7, alt: "manicure photo" },
      { src: work_8, alt: "beautician's photo" },
      { src: work_9, alt: "beautician's photo" },
    ],

    haircut: [
      { src: photo_1, alt: "fill-in picture" },
      { src: photo_1, alt: "fill-in picture" },
      { src: photo_1, alt: "fill-in picture" },
      { src: photo_1, alt: "fill-in picture" },
      { src: photo_1, alt: "fill-in picture" },
      { src: photo_1, alt: "fill-in picture" },
      { src: photo_1, alt: "fill-in picture" },
      { src: photo_1, alt: "fill-in picture" },
      { src: photo_1, alt: "fill-in picture" },
    ],
    manicure: [
      { src: photo_2, alt: "fill-in picture" },
      { src: photo_2, alt: "fill-in picture" },
      { src: photo_2, alt: "fill-in picture" },
      { src: photo_2, alt: "fill-in picture" },
      { src: photo_2, alt: "fill-in picture" },
      { src: photo_2, alt: "fill-in picture" },
      { src: photo_2, alt: "fill-in picture" },
      { src: photo_2, alt: "fill-in picture" },
      { src: photo_2, alt: "fill-in picture" },
    ],
    "make-up": [
      { src: photo_3, alt: "fill-in picture" },
      { src: photo_3, alt: "fill-in picture" },
      { src: photo_3, alt: "fill-in picture" },
      { src: photo_3, alt: "fill-in picture" },
      { src: photo_3, alt: "fill-in picture" },
      { src: photo_3, alt: "fill-in picture" },
      { src: photo_3, alt: "fill-in picture" },
      { src: photo_3, alt: "fill-in picture" },
      { src: photo_3, alt: "fill-in picture" },
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
          <img src={image_3} alt="Kevin.Murphy" />
          <img src={image_4} alt="Oribe" />
          <img src={image_5} alt="Alterna" />
          <img src={image_6} alt="Aldo Coppola" />
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
              <img key={index} src={photo.src} alt={photo.alt} />
            ))}
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default Home;
