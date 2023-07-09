import "./App.css";
import {Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import {Continent} from "./pages/Continent"
import {Country} from "./pages/Country";
import {DetailPage} from "./pages/DetailPage"

function App() {
  return ( <div className="bg-black bg-opacity-80 text-white">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/continent/:continentId" element={<Continent />}/>
      <Route path="/country/:countryId" element={<Country />}/>
      <Route path="/detail" element={<DetailPage />}/>
    </Routes>
  </div>)
}

export default App;
