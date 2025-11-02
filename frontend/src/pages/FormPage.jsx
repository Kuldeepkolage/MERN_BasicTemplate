import { useState } from "react";
import axios from "axios";
// change in 3 places in form page -> change in model -> change in recordpage 
export default function FormPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", phone: "", address: "", quantity: "", dateOfBirth:"" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/records", form);
    alert("Data saved successfully!");
    setForm({ name: "", email: "", message: "", phone: "", address: "", quantity: "", dateOfBirth:"" });
  };

  return (
    <div className="flex justify-center items-center p-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-96"
      >
        <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">
          List Your Product
        </h2>
        <input
          className="border p-2 w-full mb-3"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        ></textarea>
        <input
          className="border p-2 w-full mb-3"
          placeholder="Phone"
          type="tel"
          value={form.phone || ""}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Address"
          value={form.address || ""}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <input
          type="number"
          className="border p-2 w-full mb-3"
          placeholder="Quantity"
          min="1"
          value={form.quantity || ""}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />

        <input
          type="date"
          className="border p-2 w-full mb-3"
          placeholder="Date of Birth"
          value={form.dateOfBirth || ""}
          onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
        />

        <button className="bg-blue-500 text-white w-full py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
