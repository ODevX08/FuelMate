import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalculatorPage from "./pages/CalculatorPage";
import HistoryPage from "./pages/HistoryPage";
import VechiclesPage from "./pages/VechiclesPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<CalculatorPage/>}/>
          <Route path="/history" element={<HistoryPage/>}/>
          <Route path="/vechicles" element={<VechiclesPage/>}/>
          <Route path="/settings" element={<SettingsPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
