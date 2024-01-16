import { useCallback, useState } from 'react'

import request from '../../libs/request'

const useEmailSender = () => {
  const [progress, setProgress] = useState<number>(0)
  const [templateId, setTemplateId] = useState<string>('')

  const handleSendEmails = useCallback(async () => {
    try {
      const response = await request('send_emails', 'POST', {
        template_id: templateId
      })
      console.log(response)
      setProgress(100)
    } catch (error) {
      console.error(error)
    }
  }, [templateId])

  return {
    progress,
    handleSendEmails,
    setTemplateId
  }
}

export default useEmailSender
