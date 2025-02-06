import { useState } from "react";
import axios from "axios";

const Company = () => {
    const BASEURL= import.meta.env.VITE_BASEURL
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyType: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const {token} = JSON.parse(localStorage.getItem("auth"))

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post( `${BASEURL}company/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(response.data.message);
      setFormData({
        name: "",
        email: "",
        companyType: "",
        location: "",
        description: "",
      });
    } catch (error) {
      console.error("Error creating company:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 via-pink-500 to-yellow-400">
      <div className="max-w-md w-full p-6 bg-white bg-opacity-95 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">🚀 Create Company</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Company Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter company name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter company email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Company Type</label>
            {/* <input
              type="text"
              name="companyType"
              placeholder="Tech, Finance, Healthcare..."
              value={formData.companyType}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            /> */}
           <select 
    name="companyType"
    value={formData.companyType}
    onChange={handleChange}
    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
    required
>
    <option value="" disabled>Select Type</option>
    <option value="TECH">TECH</option>
    <option value="NON_TECH">NON_TECH</option>
</select>

          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Write a short description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-2 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 transition"
          >
            ✨ Create Company
          </button>
        </form>
      </div>
    </div>
  );
};

export default Company;
