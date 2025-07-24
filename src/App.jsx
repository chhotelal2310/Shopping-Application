import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CardDetails from "./Pages/CardDetails";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardDetails />} />
      </Routes>
    </>
  );
};

export default App;
