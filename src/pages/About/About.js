import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { partnersActions } from "state/actions/partners";
import { useEffect } from "react";
import { AboutOurCompany, CEOInfo } from "./partials";
import {
  PageWrapper,
  BecomeDealerSection,
  PartnersCarousel,
  Services,
} from "components";

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
        bgActive={true}
        headerTxt={"Our expertise"}
        introduction={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie leo est, in auctor lectus elementum congue. Nulla neque nisi, placerat nec dolor nec, semper sodales mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
      />
      <CEOInfo />
      <PartnersCarousel />
      <BecomeDealerSection />
    </PageWrapper>
  );
};

export default About;
