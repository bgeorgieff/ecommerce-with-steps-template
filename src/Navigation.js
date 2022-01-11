import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollToTop from "./ScrollTopTop";
import {
  Home,
  AuthPage,
  ServicePage,
  BookingSteps,
  About,
  LogOut,
  Profile,
} from "./pages";

const Navigation = () => {
  const isLogged = useSelector((store) => store.authReducer.authData);

  return (
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={() => (!!isLogged ? <Redirect to="/" /> : <AuthPage />)}
        />
        <Route exact path="/service-page" component={ServicePage} />
        <Route
          exact
          path="/service-page/:id/step-:id"
          component={BookingSteps}
        />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/logout" render={() => <LogOut />} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </ScrollToTop>
  );
};

export default Navigation;
