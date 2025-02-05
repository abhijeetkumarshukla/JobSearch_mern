 import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="p-1">
      <div className="flex justify-between w-auto m-auto pl-7.5 pr-7 shadow-lg">
      <NavLink to='/'> <span className="  font-bold text-2xl">Job Search</span></NavLink>
       <div className="flex justify-around   w-auto">
       <NavLink to='login'>  <button className="border m-2 w-auto p-1.5 rounded-lg bg-sky-600 hover:bg-sky-700">logIn</button></NavLink>
       <NavLink to='signup'>  <button className="border m-2 w-auto p-1.5 rounded-lg bg-sky-600 hover:bg-sky-700">SignUp</button></NavLink>
       </div>
      </div>
      
    </div>
  )
}

export default Navbar
