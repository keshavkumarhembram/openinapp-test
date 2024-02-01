import React from 'react'

import SocialLinks from './SocialLinks'
import BannerLogo from './../../assets/img/brand/BannerLogo.svg'
import LogoLine from './../../assets/img/brand/LogoLine.svg'
import BrandLogo from '../Brand/BrandLogo'

function BrandBanner() {
  return (
    <div className='flex sm:flex-col items-center sm:h-screen sm:w-1/2 signup-clip-left text-white bg-indigo-600 montserrat'>
      <div className=' sm:flex items-center hidden  relative top-8 left-8 w-full h-32'>
        <img className='absolute ' src={BannerLogo} />
        <img className='absolute left-[-4px]' src={LogoLine} />
      </div>
      <div className='sm:hidden'>
        <BrandLogo />
      </div>
        <p className='hidden sm:block mx-auto my-auto text-6xl font-bold'>BASE</p>
        <SocialLinks />
    </div>
  )
}

export default BrandBanner