import { Camera } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import ApplyJob from "./Pages/ApplyJob";
import Applications from "./Pages/Applications";
import Jobs from "./Components/Jobs";
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/apply-job/:id" element={<ApplyJob />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
    </>
  );
}

export default App;
