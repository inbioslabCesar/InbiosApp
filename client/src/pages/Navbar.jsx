import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from '../assets/inbioslab-logo.png'
import { DASHBOARD } from "../routes/paths";

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition z-50">
        <ul className=" text-center text-xl p-20">
          <Link spy={true} smooth={true} to="home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Inicio
            </li>
          </Link>
          <Link spy={true} smooth={true} to="about">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Nosotros
            </li>
          </Link>
          <Link spy={true} smooth={true} to="services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Servicios
            </li>
          </Link>
          <Link spy={true} smooth={true} to={DASHBOARD}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Empresas
            </li>
          </Link>
          <Link spy={true} smooth={true} to="constact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Contactos
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1">
          <img className=" w-32 " src={logo} alt="" />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px] ">
              <Link spy={true} smooth={true} to="/home">
                <li className=" text-blue-800 hover:text-gray-700 transition border-b-2 border-slate-900 hover:border-yellow-400 cursor-pointer">
                  Inicio
                </li>
              </Link>
              <Link spy={true} smooth={true} to="about">
                <li className="text-blue-800 hover:text-gray-700 transition border-b-2 border-slate-900 hover:border-yellow-400 cursor-pointer">
                  Nosotros
                </li>
              </Link>
              <Link spy={true} smooth={true} to="services">
                <li className="text-blue-800 hover:text-gray-700 transition border-b-2 border-slate-900 hover:border-yellow-400 cursor-pointer">
                  Servicios
                </li>
              </Link>
              <Link spy={true} smooth={true} to={DASHBOARD}>
                <li className="text-blue-800 hover:text-gray-700 transition border-b-2 border-slate-900 hover:border-yellow-400 cursor-pointer">
                  Empresas
                </li>
              </Link>
              <Link spy={true} smooth={true} to="constact">
                <li className="text-blue-800 hover:text-gray-700 transition border-b-2 border-slate-900 hover:border-yellow-400 cursor-pointer">
                  Contactos
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block md:hidden transition" onClick={handleClick}>
          {click ? <FaTimes className="text-black" /> : <CiMenuFries className="text-black"/>}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
