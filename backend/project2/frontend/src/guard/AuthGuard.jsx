import React, { useContext, useEffect } from "react";
import { AuthContext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AuthGuard({ children }) {
  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, [authenticated]);
  return <div>{children}</div>;
}
