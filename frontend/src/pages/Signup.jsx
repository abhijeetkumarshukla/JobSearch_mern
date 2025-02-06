import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const BASEURL= import.meta.env.VITE_BASEURL
  console.log("BASEURL=> ", BASEURL)
    const navigate = useNavigate();
  const [isTrue, setIsTrue] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "jobseeker",
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
`${BASEURL}user/register`,
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
     
     <div className="flex min-h-screen bg-slate-900 items-center justify-center">
  <div className="bg-slate-950 bg-opacity-70 shadow-lg rounded-lg p-6 w-96">
    <div className="flex justify-center space-x-4 mb-6">
      <button
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
          isTrue ? "bg-slate-700 text-white" : "bg-purple-500 text-white"
        }`}
        onClick={() => onClickBTN("jobseeker")}
      >
        Jobseeker
      </button>
      <button
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
          isTrue ? "bg-purple-500 text-white" : "bg-slate-700 text-white"
        }`}
        onClick={() => onClickBTN("recruiter")}
      >
        Recruiter
      </button>
    </div>
    <h1 className="text-xl font-semibold text-white text-center mb-4">
      Continue as {isTrue ? "Recruiter" : "Jobseeker"}
    </h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="w-full bg-slate-800 bg-opacity-70 flex items-center gap-3 px-4 py-3 rounded-lg">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
          required
        />
      </div>
      <div className="w-full bg-slate-800 bg-opacity-70 flex items-center gap-3 px-4 py-3 rounded-lg">
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
          required
        />
      </div>
      <div className="w-full bg-slate-800 bg-opacity-70 flex items-center gap-3 px-4 py-3 rounded-lg">
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer w-full bg-purple-700 text-white flex justify-center items-center rounded-lg h-10 p-2 py-3 hover:bg-purple-800 transition-all"
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
