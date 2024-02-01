import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { read, utils } from 'xlsx'
import Papa from 'papaparse'
import ActionButton from '../Utils/Buttons/ActionButton';

import ExcelIcon from './../../assets/img/icons/Excel.svg';
import UploadIcon from './../../assets/img/icons/UploadIcon.svg'

function UploadBox({onSetData}) {
  const [file, setFile] = useState(null);

  
  const onDrop = useCallback((acceptedFiles) => {
    // Check only one file is uploaded
    if(acceptedFiles.length !== 1) {
      alert("Please upload one file");
    }
    const file = acceptedFiles[0];
    
    // Check if file is excel file or not
    if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".csv") ) {
      alert("Please upload a valid Excel or CSV file.");
      return;
    }
    setFile(file);
  });

  const onclickHandler = () => {
    try {
      const reader = new FileReader();
      if(file.name.endsWith(".xlsx")) {
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = read(data, { type: 'binary' });
  
          const sheetName = workbook.SheetNames[0];
          const jsonData = utils.sheet_to_json(workbook.Sheets[sheetName]);
          console.log(jsonData[0]);
          onSetData(jsonData);
        };
  
        reader.readAsBinaryString(file);
      } else {
        Papa.parse(file, {
          complete: (result) => {
            // Display the parsed CSV data
            console.log(result.data[0]);
            onSetData(result.data);
          },
          header: true, // Assuming the CSV file has a header row
        });
      }
    } catch (error) {
      console.error('Error reading Excel file:', error.message);
    }
  };

  const { getRootProps, getInputProps} = useDropzone({ onDrop });

  return (
    <div>
     <div className='flex items-center justify-center border-2 border-dashed p-4 bg-white h-[300px] mb-8' {...getRootProps()} >
        <input {...getInputProps() } accept='.csv, .xlsx' />
          <div className='flex flex-col items-center justify-center'>
            <img src={ExcelIcon} />
            {file == null ? (
           <p>Drop you excel sheet here or <span className='text-[#605BFF]'>browse</span></p>
        ) : (
          <p>{file.name}</p>
        )}
          </div>
         
      </div>

          <ActionButton actionName="Upload" actionFunction={onclickHandler} >
            <img src={UploadIcon} /><span>Upload</span>
          </ActionButton>

    </div>
  )
}

export default UploadBox