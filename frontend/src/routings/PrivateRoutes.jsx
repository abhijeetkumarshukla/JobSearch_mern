import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const authData = JSON.parse(localStorage.getItem("auth"));

  if (!authData?.token) return <Navigate to="/login" />;



  return children; // Render children if authenticated and no redirection is needed
}

export default PrivateRoutes;
