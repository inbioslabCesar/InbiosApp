import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import { DASHBOARD} from "../../routes/paths";

const PublicRoute = () => {
  const { isAuthenticated } = useAuthContext();
  if (isAuthenticated) {
    return <Navigate to={DASHBOARD} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicRoute;
