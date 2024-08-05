function NavBar({ isOpen, handleOpen }) {
  return (
    <nav
      className={`bg-[#10111C] text-[#B7B8BA] font-semibold text-xl transition-all ease-in-out duration-700 overflow-hidden absolute top-14 right-0 left-0 ${
        isOpen ? "max-h-72 " : "max-h-0 lg:max-h-7"
      } lg:transform-none lg:static lg:overflow-visible lg:text-base lg:duration-0 lg:flex lg:justify-between lg:items-center lg:text-[#8f8f8f]`}
    >
      <ul className="flex flex-col items-center gap-5 py-10 lg:flex-row lg:gap-11">
        <li className="cursor-pointer hover:text-white">
          <a href="#" onClick={handleOpen}>
            Home
          </a>
        </li>
        <li className="cursor-pointer hover:text-white">
          <a href="#market" onClick={handleOpen}>
            Market
          </a>
        </li>
        <li className="cursor-pointer hover:text-white">
          <a href="#pricing" onClick={handleOpen}>
            Our Pricing
          </a>
        </li>
        <li className="cursor-pointer hover:text-white">
          <a href="#pricing" onClick={handleOpen}>
            Join
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
