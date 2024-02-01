import React from 'react'
import Row from './Row'

function Table({data}) {
  return (
    <ul className='flex flex-col gap-2 bg-[#F5F5F5] p-2 rounded-md overflow-x-auto whitespace-nowrap'>
        <li className='w-full flex justify-between'>
            <p className='w-[150px] '>Sl. No</p>
            <p className='w-[150px] text-center'>Links</p>
            <p className='w-[150px] text-center'>Prefix</p>
            <p className='w-[300px] text-center'>Add Tags</p>
            <p className='w-[500px] text-center'>Selected Tags</p>
        </li>
        {data.map(row => <Row key={row.id} slNo={row.id} links={row.links} prefix={row.prefix} addTags={row["select tags"]} selectedTags={row.selectedTags} />)}
    </ul>
  )
}

export default Table