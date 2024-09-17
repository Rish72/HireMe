import React, { useEffect } from "react";
import LogoImg from "/hireme.png";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignIn,
} from "@clerk/clerk-react";

import { PenBox } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  console.log("searched params");
  console.log(search);
  

  const  handleFormShow= (e) => {
    if(e.target === e.currentTarget){
      setShowSignIn(false)
      setSearch({});
    }
  }

  useEffect(() => {
    if(search.get('sign-in')){
      setShowSignIn(true);
    }
   },[search])

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src={LogoImg} alt="Logo of website" className="h-10" />
        </Link>

        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              {" "}
              Login{" "}
            </Button>
          </SignedOut>
          <SignedIn>
            <Link to={"/post-jobs"}>
              <Button variant="destructive" className="rounded-full">
                <PenBox size={20} className="mr-2" />
                Post a job
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-black-50  bg-opacity-70 backdrop-blur-sm"
        onClick={handleFormShow}>
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
