import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import {Navigate, useLocation} from "react-router-dom"
import { Button, Spinner } from 'flowbite-react';


const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext)
  const location = useLocation()

  if(loading){
    return <div className='text-center mx-auto mt-[50%]'>
      <Button color="gray">
        <Spinner aria-label="Alternate spinner button example" size="sm" />
        <span className="pl-3">Vui lòng chờ giây lát...</span>
      </Button>
    </div>
  }

  if(user){
    return children
  }

  return (
    <Navigate to="/login" state={{from: location}} replace >

    </Navigate>
  )
}

export default PrivateRoute
