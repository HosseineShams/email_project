import React, { useState } from 'react';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar'; 

function EmailSender() {
  const [progress, setProgress] = useState(0);
  const [templateId, setTemplateId] = useState('');

  const handleSendEmails = async () => {
    try {
      // Replace with the actual template ID
      const response = await axios.post('http://127.0.0.1:8000/api/send_emails/', { template_id: templateId });
      console.log(response.data);
      // Dummy progress update for demonstration
      setProgress(100);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="mb-4">
        <label htmlFor="templateId" className="block text-gray-700 text-sm font-bold mb-2">Select Email Template:</label>
        <select id="templateId" onChange={(e) => setTemplateId(e.target.value)} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">-- Choose a Template --</option>
          {/* Add options for templates in future */}
        </select>
      </div>
      <button onClick={handleSendEmails} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        Send Emails
      </button>
      <ProgressBar now={progress} label={`${progress}%`} className="w-full" />
    </div>
  );
}

export default EmailSender;
