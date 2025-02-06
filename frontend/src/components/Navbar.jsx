//  import {NavLink} from 'react-router-dom'

import { Link } from "react-router-dom";


// const Navbar = () => {
//   return (
//     <div className="p-1">
//       <div className="flex justify-between w-auto m-auto pl-7.5 pr-7 shadow-lg">
//       <NavLink to='/'> <span className="  font-bold text-2xl mt-1">Job Search</span></NavLink>
//        <div className="flex justify-around   w-auto">
//        <NavLink to='/login'>  <button className="border m-2 w-auto p-1.5 rounded-lg bg-sky-600 hover:bg-sky-700">logIn</button></NavLink>
//        <NavLink to='/signup'>  <button className="border m-2 w-auto p-1.5 rounded-lg bg-sky-600 hover:bg-sky-700">SignUp</button></NavLink>
//        </div>
//       </div>
      
//     </div>
//   )
// }

// export default Navbar

function Navbar() {
  return (
    <nav className="h-20 py-3 flex items-center px-5 md:px-20">
      <div className="flex justify-between items-center w-full">
        <Link to="/">
          <h1 className="font-[Space_Grotesk] text-2xl sm:text-4xl tracking-wide text-purple-950">
            JobSeekers
          </h1>
        </Link>
        <div className="flex gap-3 items-center">
          <Link to="/login">
            <button className="px-5 text-purple-950 hover:bg-purple-100 rounded-md cursor-pointer p-2">
              Login
            </button>
          </Link>
          <Link to="/signup" className="hidden md:inline-block">
            <button className="px-5 hover:bg-purple-600 bg-purple-700 text-white rounded-md p-2">
               SignUp
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
