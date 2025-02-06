
import { Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Company from '../pages/Company'
import Home from '../pages/Home'
import PrivateRoutes from './PrivateRoutes'
import RecruiterRoutes from './RecruiterRoutes'
import RecruiterPanel from '../pages/RecruiterPanel'
import JobSeekerPanel from '../pages/JobSeekerPanel'
import JobSeekerRoutes from './JobSeekerRoutes'
import JobCreate from '../pages/JobCreate'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/create-company' element={
        <PrivateRoutes>
            <RecruiterRoutes>
            <Company/>

            </RecruiterRoutes>

        </PrivateRoutes>
        }/>
      <Route path='/create-job' element={
        <PrivateRoutes>
            <RecruiterRoutes>
            <JobCreate/>

            </RecruiterRoutes>

        </PrivateRoutes>
        }/>
      <Route path='/recruiter-panel' element={
        <PrivateRoutes>
            <RecruiterRoutes>
            <RecruiterPanel/>

            </RecruiterRoutes>

        </PrivateRoutes>
        }/>
      <Route path='/jobseeker-panel' element={
        <PrivateRoutes>
            <JobSeekerRoutes>
            <JobSeekerPanel/>

            </JobSeekerRoutes>

        </PrivateRoutes>
        }/>
    </Routes>
  )
}

export default AllRoutes
