/* import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import CoinDetails from "./pages/CoinDetails"; */
import Framer from "./Framer";
function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="coindetails/:id" element={<CoinDetails />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Framer />
    </div>
  );
}

export default App;
