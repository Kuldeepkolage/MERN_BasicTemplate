import { useState } from "react";
import axios from "axios";
// change in 3 places in form page -> change in model -> change in recordpage
export default function FormPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", phone: "", address: "", quantity: "", dateOfBirth:"" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    if (!form.address.trim()) newErrors.address = "Address is required.";
    if (!form.quantity || form.quantity < 1) newErrors.quantity = "Quantity must be at least 1.";
    if (!form.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await axios.post("http://localhost:5000/api/records", form);
      alert("Data saved successfully!");
      setForm({ name: "", email: "", message: "", phone: "", address: "", quantity: "", dateOfBirth:"" });
      setErrors({});
    } catch (error) {
      alert("Failed to save data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 relative overflow-hidden p-4">
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/src/assets/rose.png')" }}></div> */}

      <div className="relative z-10 w-full max-w-lg p-8 bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 animate-fade-in">List Your Product</h2>
          <p className="text-gray-600">Fill in the details to add your product</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-400 transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <span className="absolute left-3 top-3 text-gray-400"></span>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="relative">
            <input
              className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-400 transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <span className="absolute left-3 top-3 text-gray-400"></span>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <textarea
              className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-400 transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Message"
              rows="3"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
            <span className="absolute left-3 top-3 text-gray-400"></span>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="relative">
            <input
              className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-400 transition-all duration-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <span className="absolute left-3 top-3 text-gray-400"></span>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div className="relative">
            <input
              className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-400 transition-all duration-300 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
            <span className="absolute left-3 top-3 text-gray-400"></span>
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          <div className="relative">
            <input
              type="number"
              className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-400 transition-all duration-300 ${errors.quantity ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Quantity"
              min="1"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            />
            <span className="absolute left-3 top-3 text-gray-400"></span>
            {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
          </div>

          <div className="relative">
            <input
              type="date"
              className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-400 transition-all duration-300 ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Date of Birth"
              value={form.dateOfBirth}
              onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
            />
            <span className="absolute left-3 top-3 text-gray-400"></span>
            {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
