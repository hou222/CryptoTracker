import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="bg-[#10111C]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
