
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ANPRPortal from "./component/index.jsx"; // Corrected import path
import VehicleDetails from './data';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ANPRPortal />} /> 
        <Route path='/VehicleDetails' element={<VehicleDetails />} /> {/* Corrected element syntax */}
      </Routes>
    </>
  );
}

export default App;
