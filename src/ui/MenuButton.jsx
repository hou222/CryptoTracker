function MenuButton({ handleOpen }) {
  return (
    <button className=" " onClick={handleOpen}>
      <div className="flex flex-col  gap-1.5 w-6 h-6 justify-center lg:hidden">
        <div className=" bg-white w-full h-[0.100rem]"></div>
        <div className=" bg-white w-1/2 h-[0.100rem]"></div>
        <div className=" bg-white w-full h-[0.100rem]"></div>
      </div>
    </button>
  );
}

export default MenuButton;
