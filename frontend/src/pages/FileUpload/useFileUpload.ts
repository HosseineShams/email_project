import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import request from '../../libs/request'

const useFileUpload = () => {
  const [file, setFile] = useState<File>()
  const [uploadStatus, setUploadStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0])
    setUploadStatus('idle')
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const handleFileUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await request('/api/upload/', 'POST', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      console.log(response)
      setUploadStatus('success')
    } catch (error) {
      console.error(error)
      setUploadStatus('error')
    }
  }

  return {
    getRootProps,
    getInputProps,
    handleFileUpload,
    file,
    uploadStatus // Export the status
  }
}
export default useFileUpload
