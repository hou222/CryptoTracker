import Header from "./Header";
import Hero from "./Hero";

import CryptoPrices from "./CryptoPrices";

function AppLayout() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <div className=" px-4 py-4 ">
        <CryptoPrices />
        <div className="flex flex-col justify-start items-center py-10">
          <div className="flex flex-col justify-start items-center gap-3 px-2 py-10">
            <p className="text-white text-center text-6xl font-semibold flex flex-wrap justify-center gap-2">
              OUR
              <span className="bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer text-transparent bg-clip-text">
                PRICING
              </span>
            </p>
            <p className="text-white text-center">
              Whether your time-saving automation needs are large or small,
              we’re here to help you scale.
            </p>
          </div>
          <div className=" bg-red-500 w-full flex flex-col items-center">
            <div className="w-fit bg-white flex rounded-full text-lg ">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full px-6 py-2 text-white cursor-pointer">
                MONTHLY
              </div>
              <div className="rounded-full  px-6 py-2 cursor-pointer">
                YEARLY
              </div>
            </div>
            <div className="w-full grid bg-yellow-300 grid-cols-1 text-base ">
              <div className=" bg-white rounded-xl p-3">
                <div className="flex items-end">
                  <p className="text-3xl font-semibold">$19</p>
                  <p>/month</p>
                </div>
                <div>Starter</div>
                <p>Unleash the power of automation with strong bench press.</p>
                <ul>
                  <li>Multi-step Zaps</li>
                  <li>3 Premium Apps</li>
                  <li>2 Users team</li>
                  <li>200mb Space</li>
                </ul>
                <button className="bg-blue-500">Choose plans</button>
              </div>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
