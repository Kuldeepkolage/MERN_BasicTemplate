import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Full name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid.";
    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      alert(data.message);
      if (res.ok) {
        navigate("/login");
      }
    } catch (error) {
      alert("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 relative overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/src/assets/rose.png')" }}></div> */}



      <div className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 animate-fade-in">Create Account</h2>
          <p className="text-gray-600">Join us and start your journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name"
              className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-pink-400 transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className="absolute left-3 top-3 text-gray-400"></span>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-pink-400 transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="absolute left-3 top-3 text-gray-400"></span>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-pink-400 transition-all duration-300 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="absolute left-3 top-3 text-gray-400"></span>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-pink-400 transition-all duration-300 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className="absolute left-3 top-3 text-gray-400"></span>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{" "} 
            <Link to="/login" className="text-pink-500 hover:underline font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
