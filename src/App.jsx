import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import HistoryPage from "./pages/HistoryPage";
import VehiclesPage from "./pages/VehiclesPage";
import SettingsPage from "./pages/SettingsPage";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar/>}
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/calculator" element={<CalculatorPage/>}/>
        <Route path="/history" element={<HistoryPage/>}/>
        <Route path="/vehicles" element={<VehiclesPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
      </Routes>
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter basename="/FuelMate">
        <AppContent/>
      </BrowserRouter>
    </>
  )
}

export default App;
