const BookingStepButtons = ({ handlePrevStep }) => {
  return (
    <>
      <div className="mx-3">
        <button
          className="btn-previous main-blue"
          type="button"
          onClick={(e) => handlePrevStep(e)}
        >
          ←Previos step
        </button>
      </div>
      <div className="mx-3">
        <button className="btn-next" type="submit">
          Next
        </button>
      </div>
    </>
  );
};

export default BookingStepButtons;
