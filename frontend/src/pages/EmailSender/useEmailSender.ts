import axios from 'axios'
import { useState, useEffect } from 'react'

interface EmailTemplate {
  id: number
  subject: string
}

const useEmailSender = () => {
  const [templates, setTemplates] = useState<EmailTemplate[]>([])
  const [templateId, setTemplateId] = useState('')
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/email_templates/')
      .then((response) => {
        setTemplates(response.data)
      })
      .catch((error) => {
        console.error('Error fetching email templates:', error)
      })
  }, [])

  const handleSendEmails = () => {
    if (!templateId) {
      alert('Please select an email template.')
      return
    }

    setIsSending(true)

    axios
      .post('http://127.0.0.1:8000/api/send_emails/', {
        template_id: templateId
      })
      .then(() => {
        // Removed 'response' from here
        alert('Emails have been sent successfully.')
        setIsSending(false)
      })
      .catch((error) => {
        console.error('Error sending emails:', error)
        alert('Failed to send emails.')
        setIsSending(false)
      })
  }

  return { handleSendEmails, setTemplateId, templates, templateId, isSending }
}

export default useEmailSender
