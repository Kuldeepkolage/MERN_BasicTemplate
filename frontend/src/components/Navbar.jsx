import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status when component loads
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login"); // go back to login page
  };

  return (
    <nav className="flex justify-between bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 shadow-md">
      <h1 className="text-xl font-semibold cursor-pointer" onClick={() => navigate("/")}>
        TechHub E-Commerce
      </h1>

      <div className="flex gap-4">
        <Link to="/" className="hover:underline">
          Shop
        </Link>
        <Link to="/form" className="hover:underline">
          Form
        </Link>
        <Link to="/records" className="hover:underline">Records</Link>
        <Link to="/displaypage" className="hover:underline">  Catalog</Link>
        {/* copy the above tag <Link to="/varun" className="hover:underline">Varun</Link> */}

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
