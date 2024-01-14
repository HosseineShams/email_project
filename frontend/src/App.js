import React from 'react';
import './App.css';
import Register from './components/Register';
import FileUpload from './components/FileUpload';
import EmailSender from './components/EmailSender';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Email Campaign Manager</h1>
      </header>
      <main>
        <Register />
        <FileUpload />
        <EmailSender />
      </main>
    </div>
  );
}

export default App;
