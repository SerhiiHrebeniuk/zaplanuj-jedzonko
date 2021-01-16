import React, {useState} from "react";
import "./Carousel.scss";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import slide1 from "../../../assets/Carousel/slide1.jpg";
import slide2 from "../../../assets/Carousel/slide2.jpg";
import slide3 from "../../../assets/Carousel/slide3.jpg";
import slide4 from "../../../assets/Carousel/slide4.jpg";

const Carousel = () => {

  let sliderArrTo = [
    {
      id: 0,
      header: "Stwórz swoją własną ksiązkę kulinarną !",
      message: "Twoja interaktywna lista przepisów już czeka",
      image: slide1, 
    },
    {
      id: 1,
      header: "Pomidor czy malina, a może jedno i drugie?",
      message: "To ty decydujesz o swojej diecie",
      image: slide2, 
    },
    {
      id: 2,
      header: "Zacznij już teraz",
      message: "Nie trać czasu, zadbaj o swoje o zdrowie",
      image: slide3, 
    },
    {
      id: 3,
      header: "Wygodna i prosta obsługa z przejrzystym widokiem",
      message: "Koniec ze żmudym przeszukiwaniem tony książkowych przepisów",
      image: slide4, 
    },
  ];

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArrTo.length - 1)) : setX(x + 100);
  }

  const goRight = () => {
    x === -100 * (sliderArrTo.length - 1) ? setX(0) : setX(x - 100);
  }

  return (
    <div className="slider">
      {sliderArrTo.map(({id, image, header, message}) => {
        return (
          <div key={id} className="slide" style={{transform: `translateX(${x}%)`, backgroundImage: `url(${image})`}}>
            <div className="slide__content">
              <h1 className="slide__content__header">{header}</h1>
              <h2 className="slide__content__message">{message}</h2>
            </div>
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}> 
          {" "}
          <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button id="goRight" onClick={goRight}>
          {" "}
          <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;
