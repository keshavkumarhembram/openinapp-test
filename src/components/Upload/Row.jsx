import {useState} from 'react'

import DropDownSelect from '../Utils/DropDownSelect/DropDownSelect'

function Row({slNo, links, prefix, addTags, selectedTags}) {
const [selected, setSeleted] = useState([]);
  return (
    <li className='flex justify-between items-center gap-4 p-2 bg-white rounded-md w-full'>
        <p className='w-[150px] '>{slNo}</p>
        <p className='w-[150px] text-center'>{links}</p>
        <p  className='w-[150px] text-center'>{prefix}</p>
        <DropDownSelect onSelect={(tag) => {
            setSeleted(prevState => [...prevState, tag]);
        }} id = {slNo} options={addTags} />
        <p className='w-[500px] text-center'>{selected.join(',')}</p>
    </li>
  )
}

export default Row