import ProgressBar from 'react-bootstrap/ProgressBar'

import useEmailSender from './useEmailSender'

const EmailSender = () => {
  const { handleSendEmails, progress, setTemplateId } = useEmailSender()
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
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">-- Choose a Template --</option>
        </select>
      </div>
      <button
        onClick={handleSendEmails}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        Send Emails
      </button>
      <ProgressBar now={progress} label={`${progress}%`} className="w-full" />
    </div>
  )
}

export default EmailSender
