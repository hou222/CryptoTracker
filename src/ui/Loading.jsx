function Loading() {
  return (
    <tr className="border-b  shadow rounded-md  w-full animate-pulse">
      <td className=" flex space-x-2 items-center py-3 pl-2 md:pr-1 lg:py-6">
        <div className="rounded-full bg-slate-200 w-7 h-7 lg:w-12 lg:h-12 "></div>
        <div className="h-2 bg-slate-200 rounded col-span-1  py-2 w-full"></div>
      </td>

      <td className="md:px-1">
        <div className="h-2 bg-slate-200 rounded col-span-1  py-2 w-24 lg:w-full"></div>
      </td>
      <td className="md:px-1">
        <div className="h-2 bg-slate-200 rounded col-span-1 py-2 w-24 lg:w-full"></div>
      </td>
      <td className="hidden lg:table-cell md:px-1">
        <div className="h-2 bg-slate-200  rounded col-span-1 py-2 w-full"></div>
      </td>
    </tr>
  );
}

export default Loading;
