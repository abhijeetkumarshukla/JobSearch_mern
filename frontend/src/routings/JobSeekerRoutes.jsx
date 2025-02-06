import React from 'react'
import { Navigate } from 'react-router-dom';

function JobSeekerRoutes({children}) {
    const authData = JSON.parse(localStorage.getItem("auth"));

    if (authData?.userRole !== "jobseeker") return <Navigate to="/" />;

    return children
}

export default JobSeekerRoutes