import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { bindActionCreators } from "redux";
import PageWrapper from "../components/pageWrapper";
import ProcessSteps from "../components/processSteps";
import Services from "../components/services";
import { animationActions } from "../state/actions/serviceStep";
import { homePageServiceItems } from "../utils/CardCollection";

const ServicePage = () => {
  const dispatch = useDispatch();
  const { autoAnimate } = bindActionCreators(animationActions, dispatch);
  const history = useHistory();
  const bookingStep = useSelector((state) => state.bookingReducer.bookingDetails?.bookingStep)
  const serviceId = useSelector((state) => state.bookingReducer.bookingDetails?.serviceId)

  useEffect(() => {
    autoAnimate(false);

    if(!!bookingStep) {
      history.push(`/service-page/${serviceId}/step-${bookingStep}`)
    }
  }, [autoAnimate, bookingStep, history, serviceId]);

  return (
    <PageWrapper>
      <ProcessSteps
        title={"Process Steps"}
        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
      molestie leo est, in auctor lectus elementum congue. Nulla neque
      nisi, placerat nec dolor nec, semper sodales mauris.`}
      />
      <Services cardItems={homePageServiceItems} bgActive={false} />
    </PageWrapper>
  );
};

export default ServicePage;
