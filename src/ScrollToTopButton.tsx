import React from "react";
import "./ScrollToTopButtonStyle.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = (): void => {
    const elTop: HTMLElement | null = document.querySelector("body");
    if (elTop) {
      elTop.scrollTop = 0;
    }
  };

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      {/* <i className="fa-solid fa-chevron-up"></i> */}
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
};

export default ScrollToTopButton;
