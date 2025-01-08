import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/AuthContext'
const ProtectedRoute = ({children}) => {
    
    const {isAuthenticated} = useAppContext()
    if(!isAuthenticated){
        return(
    <Navigate to="/login"/>
    )}
  return children
}
export default ProtectedRoute