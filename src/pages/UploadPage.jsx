import {useState} from 'react'
import Header from '../components/Header'
import UploadContainer from '../components/Upload/UploadContainer'
import UploadSection from '../components/Upload/UploadSection'

function UploadPage({header}) {
  const [data, setData] = useState(null);
  return (
    <div className='mt-12 mx-8 body-width'>
        <Header heading='Upload CSV' />
        <main className='flex mt-40 justify-center items-center'>
        <UploadContainer onSetData={(newData) => setData(newData)} />
        </main>
        <UploadSection data={data} />
    </div>
  )
}

export default UploadPage