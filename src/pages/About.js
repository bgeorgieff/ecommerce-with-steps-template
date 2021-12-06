import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { partnersActions } from "../state/actions/partners";
import { useEffect } from "react";
import AboutOurCompany from "../components/aboutOurCompany";
import BecomeDealer from "../components/becomeDealer";
import PageWrapper from "../components/pageWrapper";
import Partners from "../components/partnersCarousel";
import Services from "../components/services";
import { aboutPageServiceItems } from "../utils/CardCollection";
import CEOInfo from "../components/ceoInfo";

const About = () => {
  const dispatch = useDispatch();
  const { getPartnerList } = bindActionCreators(partnersActions, dispatch);

  useEffect(() => {
    getPartnerList();
  }, [getPartnerList]);

  return (
    <PageWrapper>
      <AboutOurCompany />
      <Services
        cardItems={aboutPageServiceItems}
        headerTxt={"Our expertise"}
        introduction={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie leo est, in auctor lectus elementum congue. Nulla neque nisi, placerat nec dolor nec, semper sodales mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
        bgActive={true}
      />
      <CEOInfo />
      <Partners />
      <BecomeDealer />
    </PageWrapper>
  );
};

export default About;
