import React from 'react'
import UploadBox from './UploadBox'

function UploadContainer({onSetData}) {
  return (
    <div className='w-[600px] h-[360px] p-4'>
        <UploadBox onSetData={onSetData} />
    </div>
  )
}

export default UploadContainer