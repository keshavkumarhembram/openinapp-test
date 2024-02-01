import React from 'react'

function DropDownSelect({options, id, onSelect}) {
  return (
    <div className=" relative flex justify-center items-center w-[300px] text-center">
  <select
    id={`dropdown${id}`}
    name="dropdown"
    onChange={(e) => {
        console.log(e.target.value);
        if(e.target.value == 'Select') return;
        return onSelect(e.target.value);
    }}
    className="mt-1 block w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
  >
    <option value='Select'>Select</option>
    {options && (options.split(',')).map(option => <option key={option} vlaue={option}>{option}</option>)}
  </select>
</div>
  )
}

export default DropDownSelect