

import { LogOutIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function RecNavbar() {

  const navigate = useNavigate()
  const logouthandle=()=>{
     localStorage.clear()
     navigate('/login')
  }
  return (
    <nav className="h-20 py-3 flex items-center px-5 md:px-20">
      <div className="flex justify-between items-center w-full">
        <Link to="/">
          <h1 className="font-[Space_Grotesk] text-2xl sm:text-4xl tracking-wide text-purple-950">
            JobSeekers
          </h1>
        </Link>
        <div className="flex gap-3 items-center">
          <Link to="/create-job">
            <button className="px-5 text-purple-950 hover:bg-purple-100 rounded-md cursor-pointer p-2">
              create Jobs +
            </button>
          </Link>
          <Link to="/create-company" className="hidden md:inline-block">
            <button className="px-5 hover:bg-purple-600 bg-purple-700 text-white rounded-md p-2">
              Create Company +
            </button>
          </Link>

          <button className="px-2 rounded-md p-2" onClick={logouthandle}>
              <LogOutIcon/>
            </button>
        </div>
      </div>
    </nav>
  );
}

export default RecNavbar;
