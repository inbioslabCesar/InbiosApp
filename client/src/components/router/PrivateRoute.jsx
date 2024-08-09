import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import {LOGIN } from "../../routes/paths";

const PrivateRoute = () => {
  const { isAutenticated } = useAuthContext();
  if (!isAutenticated) {
    return <Navigate to={LOGIN} />;
  }
  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default PrivateRoute;
