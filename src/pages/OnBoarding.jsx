import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

const OnBoarding = () => {
  const {user, isLoaded} = useUser();
  const navigate = useNavigate();
 
  
  const handleUserRole =  async(role) => {
    await user.update({
      unsafeMetadata : {role}
    }).then(() => {
      navigate(role === 'recruiter'?'/post-jobs': '/jobs')
    }).catch((err) => {
      console.log("Error ", err)
    })
  }

  useEffect(() => {
    if(user?.unsafeMetadata?.role){
      navigate(user.unsafeMetadata.role === 'recruiter'?'/post-jobs': '/jobs')
    }
  },[user])

  if(!isLoaded){
    return <HashLoader color='orange' size={70} />
  }
  return (
    <div className='flex flex-col items-center justify-center mt-40'>
      <h2 className='gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter'>I am a ....</h2>

      <div className='mt-16 grid grid-cols-2 gap-4 w-full md:px-40'>
        <Button variant='destructive' className='h-24 text-2xl' onClick={() => handleUserRole("candidate")}>
          Candidate
        </Button>
        <Button variant='blue' className='h-24 text-2xl' onClick={() => handleUserRole("Recuiter")}>
          Recuiter
        </Button>
      </div>
    </div>
  )
}

export default OnBoarding