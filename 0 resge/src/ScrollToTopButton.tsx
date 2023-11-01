import "./ScrollToTopButtonStyle.scss";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = (): void => {
    const elTop: HTMLElement | null = document.querySelector("body");
    if (elTop) {
      elTop.scrollTop = 0;
    }
  };

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      <i className="fa-solid fa-chevron-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
