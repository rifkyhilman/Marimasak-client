import React from 'react'
import { Navigate } from "react-router-dom";

const Protected = ({children}) => {
  const token = localStorage.getItem("Token");

  if (token !== null) {
    return <Navigate to="/" />;
  }
    return children;
}

export default Protected;
