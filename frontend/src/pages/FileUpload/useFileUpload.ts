import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import request from '../../libs/request'

const useFileUpload = () => {
  const [file, setFile] = useState<File>()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const handleFileUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await request('upload', 'POST', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  return {
    getRootProps,
    getInputProps,
    handleFileUpload,
    file
  }
}
export default useFileUpload
