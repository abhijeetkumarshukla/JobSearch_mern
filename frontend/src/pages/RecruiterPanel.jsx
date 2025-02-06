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
  return (
    <div>
      <RecNavbar/>
      {jobs.length>0? <div className="grid grid-cols-3 gap-5 w-4/5 m-auto ">
        {jobs?.map((el)=><div key={el._id} className="shadow-md">
          <h1>{el.title}</h1>
          <p>{el.description}</p>
          <p>{el.location}</p>
        </div>)}
      </div>:<h1>No jobs created</h1>}
     
    </div>
  )
}

export default RecruiterPanel
