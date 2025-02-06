import React from 'react'
import { Navigate } from 'react-router-dom';

function RecruiterRoutes({children}) {
    const authData = JSON.parse(localStorage.getItem("auth"));

    if (authData?.userRole !== "recruiter") return <Navigate to="/" />;

    return children
}

export default RecruiterRoutes
