import { useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = (props) => {
  const navigate = useNavigate();
  const { children } = props;
  let Links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Order",
      path: "/orders",
    },
  ];

  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-9999">
      <div className="items-center justify-between py-4 bg-white md:flex md:px-10 px-7">
        <div className="flex items-center justify-center text-2xl font-bold text-gray-800 cursor-pointer">
          <span className="mr-1 text-3xl text-red-700 ">
          <FontAwesomeIcon icon="bowl-food" className="text-red-700" size="sm"/>
          </span>
          Indo<span className="text-red-700">Flavors</span>
        </div>
        <div className="flex">
          <div
            className="absolute text-3xl cursor-pointer right-6 top-5 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              name={open ? "close" : "menu"}
              className="text-red-700"
            />
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 tarnsition-all duration-500 ease-in ${
              open ? "top-10 opacity-100" : "top-[-490px]"
            } md:opacity:100`}
          >
            {Links.map((link) => (
              <li key={link.name} className="text-xl md:ml-8 md:my-0 my-7">
                <Link
                  to={link.path}
                  className="text-gray-800 duration-500 cursor-pointer hover:text-gray-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="text-xl md:ml-8 md:my-0 my-7">
              <div className="flex flex-row mr-8 text-gray-800 duration-500 cursor-pointer hover:text-gray-400">
                {children}
                <ProfileDropdown handleLogout={handleLogout} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
