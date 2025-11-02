import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import RecordsPage from "./pages/RecordsPage";
import Login from "./components/Login";
import Register from "./components/Register";
import DisplayPage from "./pages/DisplayPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/records" element={<RecordsPage />} />
            <Route path="/displaypage" element={<DisplayPage />} />
            {/* create a new route by copying the above tag <Route path="/varun" element={<Varun/>} /> -> Navbar also import above*/}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
