import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const BASEURL= import.meta.env.VITE_BASEURL
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible((prev) => !prev);

  const handleInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
         `${BASEURL}user/login`,
        formData
      );
      const token = res.data.token;
      localStorage.setItem("auth", JSON.stringify({userRole:res.data.role,token, userId:res.data.userId}));
      
      console.log("Login Response:", res.data);

      if(res.data.role =="recruiter"){
        navigate('/recruiter-panel')
        
      }else{

        navigate('/jobseeker-panel')
      }

    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex h-fit min-h-screen bg-slate-900">
        <div className="m-auto w-4/5 md:border-r-2 border-white my-20 md:my-auto md:w-[60%] lg:w-[45%] sm:p-3 md:p-5 flex flex-col h-fit md:min-h-screen md:bg-slate-950 md:bg-opacity-70">
          <div className="animate-slideRight h-[80%] md:ml-10 my-auto md:w-[80%] lg:w-[70%]">
            <header className="mb-10 text-white font-[Kanit]">
              <h1 className="text-5xl font-bold">Welcome Back</h1>
              <p className="text-gray-400 mt-2">To</p>
              <h2 className="text-5xl font-bold mt-2">
                Chatify<span className="text-purple-500">.</span>
              </h2>
              <p className="text-sm text-purple-200 mt-1">
                Not a member?{" "}
                <a href="/signup" className="text-purple-500 hover:underline">
                  Sign Up
                </a>
              </p>
              <a
                href="/"
                className="text-purple-600 underline hover:no-underline text-sm"
              >
                <span className="text-sm font-bold">GO BACK</span>
              </a>
            </header>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="w-full bg-slate-800 bg-opacity-70 flex items-center gap-3 px-4 py-3 rounded-lg">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInput}
                  className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                  required
                />
                <FiUser className="w-5 h-5 text-gray-500" />
              </div>
              <div className="w-full bg-slate-800 bg-opacity-70 flex items-center gap-3 px-4 py-3 rounded-lg">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInput}
                  className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                  required
                />
                {isPasswordVisible ? (
                  <FiEye
                    className="w-5 h-5 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FiEyeOff
                    className="w-5 h-5 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <button
                type="submit"
                className="text-white w-full bg-purple-700 flex justify-center items-center rounded-lg h-10 p-2 py-3"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="flex justify-center items-center gap-4 my-8">
              <div className="h-2 border-b-2 border-gray-400 w-1/2"></div>
              <p className="text-sm text-gray-300">OR</p>
              <div className="h-2 border-b-2 border-gray-400 w-1/2"></div>
            </div>
          </div>
        </div>
        <div className="hidden md:inline-block flex-1"></div>
      </div>
    </>
  );
};

export default Login;

// AUTHENTICATED ROUTES

// RECRUITER PANEL
// JOBSEEKER PROFILE 
// JOBS