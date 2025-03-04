import { useEffect } from "react";
import { useAuthContext } from "../context/authContext";

const Logout = () => {
  const { logout } = useAuthContext();
  useEffect(() => logout(),[]);
  return null;
}

export default Logout;