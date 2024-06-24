import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />

      <main className="bg-black pt-14 z-20 ">
        <div className=" mx-6 flex  flex-col items-center text-white overflow-hidden">
          <div className="flex flex-col  gap-4 md:gap-10 items-center  py-10 md:py-16 w-60 md:w-[650px] ">
            {/* <div className="bg-blue-500 blur-[70px]   w-[200px] h-[80px] relative "></div> */}
            <p
              className=" w-[200px] md:w-[650px] md:py-5 md:filter-none top-8 text-center font-bold text-3xl md:text-[96px] leading-[110px]  blur-custom
          "
            >
              Crypto taxes done right
            </p>

            <p className=" text-center text-sm md:text-lg md:w-[380px] font-semibold  px-2">
              Connect your crypto wallets and exchanges to get your optimized
              tax report in minutes.
            </p>
            <button className="bg-[#0094FF] px-4 py-2 md:px-9 md:py-5 md:text-xl rounded-md text-sm font-semibold text-white cursor-pointer">
              Get started for free
            </button>
          </div>
          <div className=" flex flex-col gap-4 items-center max-w-60 ">
            <p
              className=" text-center font-semibold text-sm 
          "
            >
              The official crypto tax partner of
            </p>
            <div className="flex flex-wrap justify-center items-end gap-6">
              <div className="text-blue-600 font-bold text-xl">coinbase</div>
              <div className="text-[#ff007a] flex items-center">
                <div className={`bg-uni bg-no-repeat bg-cover w-6 h-6`}></div>
                UNISWAP
              </div>
              <div className="flex items-center gap-1">
                <div className={`bg-sea bg-no-repeat bg-cover w-6 h-6`}></div>
                OpenSea
              </div>
              <div className="flex items-center gap-1">
                <div className={`bg-turbo bg-no-repeat bg-cover w-6 h-6`}></div>
                <div className="flex flex-col">
                  <div className=" text-[10px] absolute ">inTuiT</div>
                  <div className=" font-semibold pt-[6px]">turbotax</div>
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className={`bg-green-500 bg-no-repeat bg-cover w-6 h-6`}
                ></div>
                H&R BLOCK
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
