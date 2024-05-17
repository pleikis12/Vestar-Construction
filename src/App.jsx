import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Gargzdai from "./components/pages/Gargzdai";
import Home from "./components/pages/Home";
import Klaipeda from "./components/pages/Klaipeda";
import Palanga from "./components/pages/Palanga";
import NoPage from "./components/pages/NoPage";
import Darbenai from "./components/pages/Darbenai";
import Terassos from "./components/pages/Terassos";
import Anglija from "./components/pages/Anglija";

const App = () => {
  console.log(window.location);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route index="/home" element={<Home />} />
            <Route path="/gargzdai" element={<Gargzdai />} />
            <Route path="/klaipeda" element={<Klaipeda />} />
            <Route path="/palanga" element={<Palanga />} />
            <Route path="/darbenai" element={<Darbenai />} />
            <Route path="/anglija" element={<Anglija />} />
            <Route path="/terassos" element={<Terassos />} />
            <Route path="*" element={<NoPage />} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
