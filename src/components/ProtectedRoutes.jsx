import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoutes() {
  const {isSignedIn, user ,isLoaded} = useUser();
  const {pathname} =useLocation();

  if(isLoaded && !isSignedIn && isSignedIn!==undefined){
    return <Navigate to="/?sign-in=true" />
  }

  // Check onBoarding status if the user is candidate or recuiter
}

export default ProtectedRoutes