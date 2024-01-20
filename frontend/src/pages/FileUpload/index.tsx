import useFileUpload from './useFileUpload'

const FileUpload = () => {
  const { getInputProps, getRootProps, handleFileUpload, file, uploadStatus } =
    useFileUpload()

  console.log('Rendering FileUpload component')

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div
        {...getRootProps()}
        className="border-dashed border-4 border-gray-300 p-10 rounded-lg cursor-pointer hover:border-gray-500">
        <input {...getInputProps()} />
        <p className="text-gray-700">
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
      {file && <div className="mt-2 text-sm text-gray-600">{file.name}</div>}
      <button
        onClick={handleFileUpload}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Upload
      </button>
      {uploadStatus === 'success' && (
        <div className="mt-2 text-sm text-green-600">
          File uploaded successfully!
        </div>
      )}
      {uploadStatus === 'error' && (
        <div className="mt-2 text-sm text-red-600">Error in file upload.</div>
      )}
    </div>
  )
}

export default FileUpload
