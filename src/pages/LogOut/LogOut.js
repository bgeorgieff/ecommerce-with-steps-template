import { useEffect } from "react";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";

const LogOut = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOGOUT" });
  }, [dispatch]);

  return <Redirect to="/" />;
};

export default LogOut;
