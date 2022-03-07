import {
  NavLink,
} from "react-router-dom";
import logo from "../assets/logo192.png";

const NavBarItem = ({ title, classProps,to }) => (
  <NavLink className={({isActive})=>isActive?`mx-4 text-red-500 font-bold cursor-pointer hover:text-red-400 ${classProps}`:`mx-4 cursor-pointer font-bold hover:text-gray-500 ${classProps}`} to={to}>{title}</NavLink>
);


const links = ["Home", "Announcements", "Results", "Leave"];

export default function NavBar(){

  return (
    <nav className="fixed w-full h-12 z-10 flex justify-center  items-center p-4">
      <div className="flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-6 cursor-pointer" />
      </div>
      <ul className="text-white flex list-none flex-row justify-between items-center flex-initial">
        {links.map((item, index) => (
          <NavBarItem key={item + index} title={item} to={item.toLowerCase()}/>
        ))}
      </ul>
    </nav>
  );
};

