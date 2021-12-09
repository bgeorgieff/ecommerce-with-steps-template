import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollToTop from "./ScrollTopTop";
import HomePage from "./pages/Home/Home";
import AuthPage from "./pages/AuthPage/AuthPage";
import BookingPage from "./pages/ServicePage/ServicePage";
import BookingSteps from "./pages/BookingSteps/BookingSteps";
import About from "./pages/About/About";
import Logout from "./pages/LogOut/LogOut";

const Navigation = () => {
  const isLogged = useSelector((store) => store.authReducer.authData);

  return (
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/login"
          render={() => (!!isLogged ? <Redirect to="/" /> : <AuthPage />)}
        />
        <Route exact path="/service-page" component={BookingPage} />
        <Route
          exact
          path="/service-page/:id/step-:id"
          component={BookingSteps}
        />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/logout" render={() => <Logout />} />
      </Switch>
    </ScrollToTop>
  );
};

export default Navigation;
