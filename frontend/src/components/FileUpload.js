import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);
  
  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleFileUpload = async () => {
    if (!file) return;
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div {...getRootProps()} className="border-dashed border-4 border-gray-300 p-10 rounded-lg cursor-pointer hover:border-gray-500">
        <input {...getInputProps()} />
        <p className="text-gray-700">Drag 'n' drop some files here, or click to select files</p>
      </div>
      {file && <div className="mt-2 text-sm text-gray-600">{file.name}</div>}
      <button onClick={handleFileUpload} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Upload
      </button>
    </div>
  );
}

export default FileUpload;
