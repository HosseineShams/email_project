import React from 'react'

import useEmailSender from './useEmailSender'

const EmailSender = () => {
  const { handleSendEmails, setTemplateId, templates, isSending } =
    useEmailSender()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="mb-4">
        <label
          htmlFor="templateId"
          className="block text-gray-700 text-sm font-bold mb-2">
          Select Email Template:
        </label>
        <select
          id="templateId"
          onChange={(e) => setTemplateId(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          disabled={isSending}>
          <option value="">-- Choose a Template --</option>
          {templates.map((template) => (
            <option key={template.id} value={template.id}>
              {template.subject}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSendEmails}
        disabled={isSending}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 ${
          isSending ? 'opacity-50 cursor-not-allowed' : ''
        }`}>
        {isSending ? 'Sending...' : 'Send Emails'}
      </button>
    </div>
  )
}

export default EmailSender
