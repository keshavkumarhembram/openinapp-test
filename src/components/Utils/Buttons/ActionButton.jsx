import React from 'react'

function ActionButton({actionName, actionFunction, children}) {
  return (
    <button className=' flex items-center justify-center h-full w-full bg-indigo-600 text-white font-bold montserrat p-2 rounded-[10px]' type={actionFunction ? 'button': 'submit'} onClick={actionFunction}>{children ? children: actionName}</button>
  )
}

export default ActionButton