import { useEffect } from "react";
import { HomeHeader, AboutSection, FAQ, Testimonials } from "./partials";
import {
  PageWrapper,
  Services,
  ProcessSteps,
  PartnersCarousel,
  BecomeDealerSection,
} from "components";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { testimonialActions } from "state/actions/testimonials";
import { partnersActions } from "state/actions/partners";
import { formActions } from "state/actions/formOptions";

const Home = () => {
  const dispatch = useDispatch();
  const { getTestimonials } = bindActionCreators(testimonialActions, dispatch);
  const { getPartnerList } = bindActionCreators(partnersActions, dispatch);
  const { getSmallFormOptions } = bindActionCreators(formActions, dispatch);

  useEffect(() => {
    getTestimonials();
    getPartnerList();
    getSmallFormOptions();
  }, [getPartnerList, getTestimonials, getSmallFormOptions]);

  return (
    <PageWrapper>
      <HomeHeader />
      <ProcessSteps
        autoAnimate={true}
        title={"Process Steps"}
        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
    molestie leo est, in auctor lectus elementum congue. Nulla neque
    nisi, placerat nec dolor nec, semper sodales mauris.`}
      />
      <Services
        home={true}
        bgActive={true}
        headerTxt="Hizmetler"
        introduction={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            molestie leo est, in auctor lectus elementum congue. Nulla neque
            nisi, placerat nec dolor nec, semper sodales mauris.`}
      />

      <FAQ />
      <Testimonials />
      <PartnersCarousel />
      <AboutSection />
      <BecomeDealerSection />
    </PageWrapper>
  );
};

export default Home;
