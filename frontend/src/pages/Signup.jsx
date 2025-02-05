import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Signup = () => {
    const navigate = useNavigate();
  const [isTrue, setIsTrue] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const onClickBTN = (userRole) => {
    setFormData((prev) => ({ ...prev, role: userRole }));
    setIsTrue(userRole === "recruiter");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/user/register",
        formData
      );
      console.log("res=?> ", res);
      alert("Registration successful!");
      
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
    console.log("formData==> ", formData);
  };

  return (
    <>
     <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
    isTrue ? "bg-gray-300" : "bg-blue-500 text-white" 
}`}
            onClick={() => onClickBTN("jobseeker")}
          >
            Jobseeker
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
    isTrue ? "bg-blue-500 text-white" : "bg-gray-300" 
  }`}
  onClick={() => onClickBTN("recruiter")}
  >
            Recruiter
          </button>
        </div>
        <h1 className="text-xl font-semibold text-center mb-4">
          Continue as {isTrue ? "Recruiter" : "Jobseeker"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
            </>
  );
};

export default Signup;
