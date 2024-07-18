import { useState } from "react";

import NavBar from "./NavBar";
import MenuButton from "./MenuButton";
import CloseButton from "./CloseButton";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleOpen() {
    setIsOpen((open) => !open);
  }
  function handleNavigate() {
    navigate("/home");
  }
  return (
    <div className="bg-black py-4 px-6 text-white flex justify-between items-center sticky top-0 left-0 right-0 ">
      <Logo handleNavigate={handleNavigate} />
      <NavBar isOpen={isOpen} />
      {/* <nav className="hidden">
          <ul>
            <li>Home</li>
            <li>Market</li>
            <li>Choose Us</li>
            <li>Join</li>
          </ul>
        </nav> */}
      <div className="flex gap-3 items-center">
        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-[6px] rounded-md text-xs font-semibold text-black cursor-pointer">
          Try if free
        </button>
        {isOpen ? (
          <CloseButton handleOpen={handleOpen} />
        ) : (
          <MenuButton handleOpen={handleOpen} />
        )}
      </div>
    </div>
  );
}

export default Header;
