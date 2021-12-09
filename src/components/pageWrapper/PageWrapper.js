import { Footer, HeaderNav } from "components";

const PageWrapper = ({ children }) => {
  return (
    <div>
      <HeaderNav />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
