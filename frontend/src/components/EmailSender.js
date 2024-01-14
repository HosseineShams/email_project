import React from 'react';
import axios from 'axios';

function SendEmails() {
const handleSendEmails = async (templateId) => {
try {
const response = await axios.post('http://127.0.0.1:8000/api/send_emails/', {
template_id: templateId, // Replace with the actual template ID
});
console.log(response.data);
} catch (error) {
console.error(error);
// Handle error
}
};

return (
<div>
<button onClick={() => handleSendEmails(1)}>Send Emails</button>
{/* we'll need to replace '1' with the actual ID of the email template we want to use /}
{/ Implement the progress bar here */}
</div>
);
}

export default SendEmails;