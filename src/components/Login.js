import React from 'react'
import Header from './Header'

function Login() {

    const [isSignInForm, setIsSignInForm] = React.useState(true)

    const toggleSignInForm = () => { 
        setIsSignInForm(!isSignInForm)
    }


  return (
      <div>
          <Header />
          <div className="absolute">
              <img
                    className="w-auto h-screen"
                  src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix" />
          </div>
          <form className="text-white absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
              <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
              {isSignInForm ? null : <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-900' />}
              <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-900' />
              <input type='password' placeholder='Password' autoComplete='false' className='p-4 my-4 w-full bg-gray-900' />
              <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In": "Sign Up"}</button>
              <p className='text-center py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up now.": "Already registered? Sign in now."}
              </p>
        </form>
    </div>
  )
}

export default Login