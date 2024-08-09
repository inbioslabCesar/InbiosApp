import { Link } from "react-router-dom";
import {LOGIN} from "../routes/paths";

const ButtonLogout = () => {
  return (
    <div>
      <button
        className="flex items-center font-bold gap-5 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg mb-5">
        <Link to={LOGIN}>Cerrar Sesion</Link>
      </button>
    </div>
  );
};

export default ButtonLogout;
