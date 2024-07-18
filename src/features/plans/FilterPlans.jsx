import PlanCard from "./PlanCard";
import check from "../../assets/checkW2.png";

function FilterPlans() {
  return (
    <div className="flex flex-col justify-start items-center py-10">
      <div className="flex flex-col justify-start items-center gap-3 px-2 py-10">
        <p className="text-white text-center text-6xl md:text-[85px] font-semibold md:font-bold flex flex-wrap justify-center gap-2">
          OUR
          <span className="bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer text-transparent bg-clip-text">
            PRICING
          </span>
        </p>
        <p className="text-white text-center">
          Whether your time-saving automation needs are large or small, we’re
          here to help you scale.
        </p>
      </div>
      <div className=" w-full flex flex-col items-center gap-6">
        <div className="w-fit bg-[#eaedf3] flex rounded-full text-lg ">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full px-6 py-2 text-white cursor-pointer">
            MONTHLY
          </div>
          <div className="rounded-full  px-6 py-2 cursor-pointer">YEARLY</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-base justify-center items-cente">
          <PlanCard />
          <div className="w-[300px] bg-[#eaedf3] rounded-3xl p-6">
            <div className="flex items-end">
              <p className="text-3xl font-semibold">$54</p>
              <p>/month</p>
            </div>
            <div className="text-3xl font-semibold">Professional</div>
            <p>Advanced tools to take your work to the next level.</p>
            <ul className="pt-4 flex flex-col gap-1 text-[#808080] ">
              <li className="flex items-center">
                <img src={check} />
                Multi-step Zaps
              </li>
              <li className="flex items-center">
                <img src={check} />
                Unlimited Premium
              </li>
              <li className="flex items-center">
                <img src={check} />
                50 Users team
              </li>
              <li className="flex items-center">
                <img src={check} />
                5gb Space
              </li>
            </ul>
            <button className="bg-[#4b87b8] w-full rounded-full py-[6px] mt-3 text-white">
              Choose plan
            </button>
          </div>
          <div className="w-[300px] bg-[#1E1F2A;] border-2 border-white text-white rounded-3xl p-6">
            <div className="flex items-end">
              <p className="text-3xl font-semibold">$89</p>
              <p>/month</p>
            </div>
            <div className="text-3xl font-semibold">Company</div>
            <p>Automation plus enterprisegrade features.</p>
            <ul className="pt-4 flex flex-col gap-1 ">
              <li className="flex items-center">
                <img src={check} />
                Multi-step Zaps
              </li>
              <li className="flex items-center">
                <img src={check} />
                Unlimited Premium
              </li>

              <li className="flex items-center">
                <img src={check} />
                25gb Space
              </li>
              <li className="flex items-center">
                <img src={check} />
                Custom Data Retention
              </li>
            </ul>
            <button className="bg-[#4b87b8] w-full rounded-full py-[6px] mt-3 text-white">
              Choose plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPlans;
