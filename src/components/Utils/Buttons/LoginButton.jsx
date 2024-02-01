import React from 'react'

function LoginButton({login, children}) {
  return (
    <button className='flex items-center justify-between w-[45%] bg-white p-2' onClick={() => login()}>{children}</button>
  )
}

export default LoginButton