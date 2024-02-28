import React, { useContext, useEffect } from "react";
import { AuthContext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

export default function GuestGuard({ children }) {
  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, [authenticated]);
  return <div>{children}</div>;
}
