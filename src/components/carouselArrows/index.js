export const CarouselArrowNext = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
};

export const CarouselArrowPrev = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
};

export const CrossSaleArrowNext = ({ currentClass, onClick, styles }) => {
  return <div style={styles} className={currentClass} onClick={onClick}></div>;
};

export const CrossSaleArrowPrev = ({ currentClass, onClick, styles }) => {
  return <div style={styles} className={currentClass} onClick={onClick}></div>;
};
