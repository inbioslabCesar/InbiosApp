import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaPowerOff } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";
import ButtonLogout from "../components/ButtonLogout";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
 
  return (
    <div className="flex ">
      <div className=" min-h-screen">
        {/* Sidebar */}
        <div
          className={`fixed top-0 w-3/4 md:w-96 xl:left-0 h-full bg-gray-100 p-8 z-50 transition-all ${
            showMenu ? " left-0" : "-left-full"
          }`}>
          <div>
            <div className=" flex items-center gap-4 mb-10">
              <img
                src={"user.picture"}
                alt={"user.name"}
                className="w-10 h-10 object-cover rounded-full ring-4 ring-white "
              />
              <div>
                <h5 className=" font-medium">{"user.name"}</h5>
                <p className=" text-gray-500">{"user.email"}</p>
              </div>
            </div>
            <div>
              <ul>
                <li className="flex items-center relative">
                  <FaPowerOff className="flex absolute  -left-2 -mt-5 text-xl" />
                  <ButtonLogout/>
                </li>
              </ul>
            </div>
            {/* isAutehtrnticate */}
            
              <div>
                <ul>
                  <li className="">
                    <Link
                      to="/dashboard/products"
                      className="flex items-center font-bold gap-5 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg mb-5">
                      {" "}
                      Tarifario
                    </Link>
                  </li>                  
                  <li className="">
                    <Link
                      to="/dashboard/notfount"
                      className="flex items-center font-bold gap-5 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg mb-5">
                      {" "}
                      Resultados
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to="/dashboard/ofertas"
                      className="flex items-center font-bold gap-5 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg mb-5">
                      {" "}
                      Ofertas
                    </Link>
                  </li>
                </ul>
              </div>
            
          </div>
        </div>
        {/* Btn menu movil */}
        <button
          onClick={() => toggleMenu()}
          className="xl:hidden fixed bottom-6 right-6 bg-gray-100 p-4 rounded-full text-3xl font-bold">
          {showMenu ? <FaWindowClose /> : <TiThMenu />}
        </button>
      </div>
      <header className=" fixed w-full xl:pl-96 mt-10 m-5 ">
        <Outlet />
      </header>
    </div>
  );
};

export default Dashboard;
