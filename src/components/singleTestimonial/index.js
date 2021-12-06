const SingleTestimonial = ({ testimonialTxt, author }) => {
  return (
    <div
      className="mx-4 my-5 px-4 pt-5 pb-4 pattern-2"
      style={{ backgroundColor: "#2d69b3" }}
    >
      <p>{testimonialTxt}</p>
      <p>{author}</p>
    </div>
  );
};

export default SingleTestimonial;
