export const CarouselArrowNext = ({ className, onClick }) => {
  return <div className={className} onClick={onClick}></div>;
};

export const CarouselArrowPrev = ({ className, onClick }) => {
  return <div className={className} onClick={onClick}></div>;
};

export const CrossSaleArrowNext = ({ currentClass, onClick, styles }) => {
  return <div style={styles} className={currentClass} onClick={onClick}></div>;
};

export const CrossSaleArrowPrev = ({ currentClass, onClick, styles }) => {
  return <div style={styles} className={currentClass} onClick={onClick}></div>;
};
