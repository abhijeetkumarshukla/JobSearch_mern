import Navbar from "../components/Navbar"
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import { Search, Briefcase, Users } from "lucide-react";
import { useState } from "react";
 

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
     <Navbar/>

     <main className="flex flex-col items-center mt-10 text-center px-4">
  <h2 className="text-5xl font-bold text-white drop-shadow-lg">
    Find Your <span className="text-yellow-300">Dream Job</span>
  </h2>
  <p className="text-white mt-2 text-lg">
    Explore thousands of job opportunities from top companies
  </p>

  {/* Search Bar */}
  <div className="flex items-center gap-2 bg-white shadow-lg rounded-full p-3 mt-6 w-full max-w-xl transition-all hover:shadow-xl">
    <Search className="text-gray-500 ml-3" size={22} />
    <input
      type="text"
      placeholder="Search for jobs..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="flex-1 border-none focus:ring-0 text-gray-800 px-2 outline-none"
    />
    <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all">
      Search
    </button>
  </div>
</main>

{/* Features Section */}
<section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
  <div className="bg-white shadow-lg p-6 rounded-lg text-center transition-all hover:scale-105">
    <Briefcase className="text-blue-500 mx-auto" size={45} />
    <h3 className="text-2xl font-semibold mt-4 text-gray-900">Find Jobs</h3>
    <p className="text-gray-600 mt-2">
      Browse jobs from various industries and apply easily.
    </p>
  </div>
  <div className="bg-white shadow-lg p-6 rounded-lg text-center transition-all hover:scale-105">
    <Users className="text-purple-500 mx-auto" size={45} />
    <h3 className="text-2xl font-semibold mt-4 text-gray-900">Top Companies</h3>
    <p className="text-gray-600 mt-2">
      Discover companies hiring and learn about their culture.
    </p>
  </div>
  <div className="bg-white shadow-lg p-6 rounded-lg text-center transition-all hover:scale-105">
    <Briefcase className="text-green-500 mx-auto" size={45} />
    <h3 className="text-2xl font-semibold mt-4 text-gray-900">Career Growth</h3>
    <p className="text-gray-600 mt-2">
      Get career tips and guidance to grow professionally.
    </p>
  </div>
</section>

{/* Job Categories */}
<section className="mt-16 max-w-5xl mx-auto">
  <h3 className="text-3xl font-bold text-center text-white">Popular Categories</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
    {[
      { title: "Software Development", color: "bg-blue-500" },
      { title: "Marketing", color: "bg-purple-500" },
      { title: "Finance", color: "bg-green-500" },
      { title: "Design", color: "bg-yellow-500" },
    ].map((category, index) => (
      <div
        key={index}
        className={`${category.color} text-white p-4 rounded-lg text-center font-semibold hover:scale-105 transition-all`}
      >
        {category.title}
      </div>
    ))}
  </div>
</section>

{/* Call to Action */}
<section className="mt-16 text-center">
  <h3 className="text-3xl font-bold text-white">Start Your Journey Today!</h3>
  <p className="text-gray-200 mt-2">
    Whether you are a jobseeker or recruiter, we have the right platform for you.
  </p>
  <div className="mt-6 flex justify-center gap-6">
    <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all">
      Find Jobs
    </button>
    <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all">
      Post a Job
    </button>
  </div>
</section>


    </div>
  )
}

export default Home
