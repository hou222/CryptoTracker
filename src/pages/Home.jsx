import FilterPlans from "../features/plans/FilterPlans";
import CryptoPrices from "../ui/CryptoPrices";
import Hero from "../ui/Hero";
import Loading from "../ui/Loading";

function Home() {
  return (
    <main>
      <Hero />
      <div className=" px-4 py-4 ">
        <CryptoPrices />
        {/* <Loading /> */}
        <FilterPlans />
      </div>
    </main>
  );
}

export default Home;
