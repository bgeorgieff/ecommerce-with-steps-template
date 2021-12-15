import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { partnersActions } from "state/actions/partners";
import { useEffect } from "react";
import {
  PageWrapper,
  AboutOurCompany,
  BecomeDealerSection,
  PartnersCarousel,
  Services,
  CEOInfo,
} from "components";
import { aboutPageServiceItems } from "./partials";

const About = () => {
  const dispatch = useDispatch();
  const { getPartnerList } = bindActionCreators(partnersActions, dispatch);

  useEffect(() => {
    getPartnerList();
  }, [getPartnerList]);

  const services = {
    cardItems: aboutPageServiceItems,
    headerTxt: "Our expertise",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie leo est, in auctor lectus elementum congue. Nulla neque nisi, placerat nec dolor nec, semper sodales mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <PageWrapper>
      <AboutOurCompany />
      <Services bgActive={true}>{services}</Services>
      <CEOInfo />
      <PartnersCarousel />
      <BecomeDealerSection />
    </PageWrapper>
  );
};

export default About;
