import { useEffect, useState } from "react";
import axios from "axios";

export default function RecordsPage() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const res = await axios.get("http://localhost:5000/api/records");
    setRecords(res.data);
  };

  const deleteRecord = async (id) => {
    await axios.delete(`http://localhost:5000/api/records/${id}`);
    fetchRecords();
  };

  useEffect(() => { fetchRecords(); }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">My Orders</h2>
      <div className="grid gap-4">
        {records.map((r) => (
          <div key={r._id} className="border rounded-lg p-4 flex justify-between items-center bg-white shadow">
            <div>
              {r.productName ? (
                <>
                  <img src={r.productImage} alt={r.productName} className="w-20 h-20 object-cover rounded mb-2" />
                  <p><b>Product:</b> {r.productName}</p>
                  <p><b>Price:</b> {r.productPrice}</p>
                  <p><b>Quantity:</b> {r.quantity}</p>
                </>
              ) : (
                <>
                  <p><b>Name:</b> {r.name}</p>
                  <p><b>Email:</b> {r.email}</p>
                  <p><b>Message:</b> {r.message}</p>
                  <p><b>Phone:</b> {r.phone}</p>
                  <p><b>Address:</b> {r.address}</p>
                  <p><b>Quantity:</b> {r.quantity}</p>
                  <p><b>Date of Birth:</b> {r.dateOfBirth}</p>
                </>
              )}
            </div>
            <button onClick={() => deleteRecord(r._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
