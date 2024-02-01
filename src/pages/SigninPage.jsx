import React from 'react'

import BrandBanner from '../components/Signup/BrandBanner'
import Signin from '../components/Signup/Signin'


function SigninPage() {
  return (
    <div className='flex flex-col sm:flex-row '>
      <BrandBanner />
      <Signin />
    </div>
  )
}

export default SigninPage