function CloseButton({ handleOpen }) {
  return (
    <button className=" " onClick={handleOpen}>
      <div className=" w-6 h-6 relative lg:hidden">
        <div className=" bg-white w-full h-[0.100rem] absolute top-0 bottom-0 my-auto rotate-45"></div>

        <div className=" bg-white w-full h-[0.100rem] absolute top-0 bottom-0 my-auto -rotate-45"></div>
      </div>
    </button>
  );
}

export default CloseButton;
