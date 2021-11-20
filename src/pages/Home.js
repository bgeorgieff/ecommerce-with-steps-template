import Partners from "../components/partnersCarousel";
import ProcessSteps from "../components/processSteps";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import AboutHomePage from "../components/aboutHP";
import BecomeDealer from "../components/becomeDealer";
import HomeHeader from "../components/homeHeader";
import FAQ from "../components/faq";
import PageWrapper from "../components/pageWrapper";
import { homePageServiceItems } from "../utils/CardCollection";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { animationActions } from "../state/actions/serviceStep/index"

const Home = () => {
  const dispatch = useDispatch();
  const { autoAnimate } = bindActionCreators(animationActions, dispatch)

  useEffect(() => {
    autoAnimate(true)
  }, [autoAnimate])

  return (
    <PageWrapper>
      <HomeHeader />
      <ProcessSteps
       title={'Process Steps'}
       text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
       molestie leo est, in auctor lectus elementum congue. Nulla neque
       nisi, placerat nec dolor nec, semper sodales mauris.`}
      />
      <Services
        headerTxt={"Hizmetler"}
        introduction={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                molestie leo est, in auctor lectus elementum congue. Nulla neque
                nisi, placerat nec dolor nec, semper sodales mauris.`}
        cardItems={homePageServiceItems}
        bgActive={true}
      />
      <FAQ />
      <Testimonials />
      <Partners />
      <AboutHomePage />
      <BecomeDealer />
    </PageWrapper>
  );
};

export default Home;
