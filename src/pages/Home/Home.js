import { useEffect } from "react";
import { HomeHeader, homeServiceCardItems } from "./partials";
import {
  PageWrapper,
  FAQ,
  Testimonials,
  Services,
  ProcessSteps,
  PartnersCarousel,
  BecomeDealerSection,
  AboutSection,
} from "components";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { animationActions } from "state/actions/serviceStep/index";
import { testimonialActions } from "state/actions/testimonials";
import { partnersActions } from "state/actions/partners";
import { formActions } from "state/actions/formOptions";

const Home = () => {
  const dispatch = useDispatch();
  const { autoAnimate } = bindActionCreators(animationActions, dispatch);
  const { getTestimonials } = bindActionCreators(testimonialActions, dispatch);
  const { getPartnerList } = bindActionCreators(partnersActions, dispatch);
  const { getSmallFormOptions } = bindActionCreators(formActions, dispatch);

  const processSteps = {
    title: "Process Steps",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
    molestie leo est, in auctor lectus elementum congue. Nulla neque
    nisi, placerat nec dolor nec, semper sodales mauris.`,
  };

  const services = {
    headerTxt: "Hizmetler",
    introduction: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            molestie leo est, in auctor lectus elementum congue. Nulla neque
            nisi, placerat nec dolor nec, semper sodales mauris.`,
    cardItems: homeServiceCardItems,
  };

  useEffect(() => {
    getTestimonials();
    getPartnerList();
    getSmallFormOptions();
    autoAnimate(true);
  }, [autoAnimate, getPartnerList, getTestimonials, getSmallFormOptions]);

  return (
    <PageWrapper>
      <HomeHeader />
      <ProcessSteps>{processSteps}</ProcessSteps>
      <Services bgActive={true}>{services}</Services>
      <FAQ />
      <Testimonials />
      <PartnersCarousel />
      <AboutSection />
      <BecomeDealerSection />
    </PageWrapper>
  );
};

export default Home;
