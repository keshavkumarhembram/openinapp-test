import { useEffect } from 'react'
import Table from './Table'

function UploadSection({data}) {
  console.log(data);
  return (
    <>
  {data &&  <div className='w-full  mt-8 p-2 sm:p-20'>
        <h2>Uploads</h2>
        <Table data={data}/> 
    </div>}
    </>
  )
}

export default UploadSection