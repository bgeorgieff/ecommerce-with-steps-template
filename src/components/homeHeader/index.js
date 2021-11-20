import HomeForm from "../homeForm";

const HomeHeader = () => {
  return (
    <div className='header-wrapper'>
      <div className="header-text-container">
        <div className="mb-5 pt-5">
          <h2 className="w-txt text-center pt-10">
            Aracınıza anahtar ihtiyacınız mı var?
            <div className='w-bg'>
              <span className="mx-auto main-blue">Dert etmeyin!</span>
            </div>
          </h2>
        </div>
        <div className="s-form mt-8">
          <HomeForm />
        </div>
        <div className="curve-lines"></div>
      </div>
    </div>
  );
};

export default HomeHeader;