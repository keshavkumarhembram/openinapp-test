import React from 'react'

import Logo from './../../assets/img/brand/logo.svg'
import whiteLogo from './../../assets/img/brand/whiteLogo.svg'

function BrandLogo() {
  return (
    <div className=' ml-2 mt-4 mb-4 sm:ml-14 sm:mt-12 flex items-center gap-3'>
        <img className='sm:hidden' src={whiteLogo} />
        <img className='hidden sm:block' src={Logo} />
        <p className='text-2xl font-semibold hidden sm:block'>Base</p>
    </div>
  )
}

export default BrandLogo