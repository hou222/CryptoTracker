function LoadingDetails() {
  /* return (
    <div className="lg:flex  lg:justify-between animate-pulse lg:items-center max-w-7xl mx-auto">
      <div className=" flex  items-center gap-1 py-4">
        <div className="  w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]" />
        <div className=" flex gap-3 items-end ">
          <p className=" text-2xl font-semibold">
            <span className="text-[#c9c9c9] text-xs px-2"></span>
          </p>
        </div>
      </div>
      <div className=" flex items-center gap-3 lg:gap-6">
        <p className="text-2xl font-semibold lg:text-[#b3b3b3]"></p>
        <div
          className={`text-white font-semibold text-sm lg:text-basepx-2 py-[2px] lg:py-1 lg:px-3 rounded-sm w-fit h-fit lg:mr-0`}
        ></div>
      </div>
      <div>
        <div className="hidden lg:block text-2xl font-semibold text-[#b3b3b3]"></div>
      </div>
    </div>
  ); */
  ///////////////////////////////////////////////
  return (
    <div className="lg:flex  lg:justify-between animate-pulse lg:items-center max-w-7xl mx-auto">
      <div className=" flex lg:w-1/3 items-center gap-1 py-4">
        <div className="rounded-full bg-slate-200 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] "></div>
        <div className=" flex gap-3 rounded-full w-1/2 bg-slate-200 items-end ">
          <p className=" text-2xl  font-semibold">
            <span className="text-[#c9c9c9] text-xs px-2"></span>
          </p>
        </div>
        {/* <div className="h-2 bg-slate-200 rounded col-span-1  py-2 w-full"></div> */}
      </div>

      <div className="flex gap-2 lg:w-1/4 ">
        <div className="md:px-1 lg:w-full ">
          <div className="h-2 bg-slate-200 rounded col-span-1  py-2 w-24 lg:w-full lg:h-7 lg:rounded-full"></div>
        </div>
        <div className="md:px-1 lg:w-full">
          <div className="h-2 bg-slate-200 rounded col-span-1 py-2 w-24 lg:w-full lg:h-7 lg:rounded-full"></div>
        </div>
      </div>
      <div className="hidden lg:table-cell lg:w-1/4 md:px-1 ">
        <div className="h-2 bg-slate-200  rounded col-span-1 py-2 w-full lg:h-7 lg:rounded-full"></div>
      </div>
    </div>
  );
}

export default LoadingDetails;
