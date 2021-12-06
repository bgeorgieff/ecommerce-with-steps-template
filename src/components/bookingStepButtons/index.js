const BookingStepButtons = ({ handlePrevStep, type, handleClick }) => {
  return (
    <>
      <div className="mx-md-3 mx-1">
        <button
          className="btn-previous main-blue mt-2 mt-sm-0"
          type="button"
          onClick={(e) => handlePrevStep(e)}
        >
          ←Previos step
        </button>
      </div>
      <div className="mx-1 mx-lg-3 mt-2 mt-sm-0">
        {handleClick ? (
          <button
            className="btn-next"
            type={type}
            onClick={(e) => handleClick(e)}
          >
            Next
          </button>
        ) : (
          <button className="btn-next" type={type}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default BookingStepButtons;
