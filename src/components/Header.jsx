import React from 'react'
import LogoImg from "/hireme.png"
  import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react'

const Header = () => {
  return (
    <>
    <nav className='py-4 flex justify-between items-center'>
    <Link to="/">
      <img src={LogoImg} alt="Logo of website" className='h-10'/>  
    </Link>
    <Button variant="outline"> Login </Button>
    
    
    
    
    
    
    
    
    {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
    </nav>
    </>
  )
}

export default Header