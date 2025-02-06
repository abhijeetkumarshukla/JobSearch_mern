import axios from "axios"
import RecNavbar from "../components/RecNavbar"
import { useEffect, useState } from "react";
 


function RecruiterPanel() {
  const BASEURL= import.meta.env.VITE_BASEURL;
  const [jobs,setJobs] = useState([])

  const authData = JSON.parse(localStorage.getItem("auth"));
  const getJobs = async ()=>{
    try {
      const res = await axios.get(`${BASEURL}job/recruiter/:${authData?.userId}`, {
        headers: {
          Authorization: `Bearer ${authData.token}`,
        },
      })

      console.log("ress====> jobs +.   =:",res.data.data)
      setJobs(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getJobs()
  },[])

  const handleDelete = (id) => {
    const updatedJobs = jobs.filter(job => job._id !== id);
    setJobs(updatedJobs);  
  };
  
  return (
    <div>
      <RecNavbar/>
      {jobs.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-4/5 m-auto mt-6">
    {jobs.map((el) => (
      <div
        key={el._id}
        className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-xl p-6 border border-gray-300 hover:shadow-2xl transition-all transform hover:scale-105 relative"
      >
       
        <h1 className="text-2xl font-semibold text-blue-900 tracking-wide">
          {el.title}
        </h1>

       
        <p className="text-gray-700 mt-3 line-clamp-3 font-light text-lg leading-relaxed">
          {el.description}
        </p>

       
        <div className="mt-4 flex items-center gap-2 text-gray-700">
          <img
            src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
            alt="Location"
            className="w-5 h-5"
          />
          <span className="text-md font-medium">{el.location}</span>
        </div>
 
        <button
          className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
          onClick={() => handleDelete(el._id)}
        >
          ✖  
        </button>
      </div>
    ))}
  </div>
) : (
  <h1 className="text-center text-xl text-gray-700 mt-10">No jobs created</h1>
)}

     
    </div>
  )
}

export default RecruiterPanel
