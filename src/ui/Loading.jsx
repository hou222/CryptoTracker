function Loading() {
  return (
    <button type="button" className="bg-indigo-500 ..." disabled>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      Processing...
    </button>
  );
  /* return (
    <tr className="p-2 animate-pulse  border-b cursor-pointer">
      <td className="flex py-3 lg:py-6 items-center gap-3 lg:gap-5 pl-4">
        <div className="w-7 h-7 lg:w-12 lg:h-12" />
        <p className="text-white text-lg lg:text-xl lg:font-semibold"></p>
      </td>
      
      <td className="font-semibold py-2 w-24 text-start lg:text-end text-white lg:text-xl"></td>
      <td className="w-20 py-2 ">
        <div
          className={`text-white font-semibold text-sm lg:text-base  px-2 py-[2px] lg:py-1 lg:px-3 rounded-sm w-fit mx-auto lg:mr-0`}
        ></div>
      </td>
      <td className="font-semibold py-2 w-24 text-start lg:text-end hidden lg:table-cell text-white lg:pr-4 lg:text-xl"></td>
      
    </tr>
  ); */
}

export default Loading;
