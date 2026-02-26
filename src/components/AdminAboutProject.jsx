import axios from 'axios';
// import { text } from 'express';
import React, { useState } from 'react';
// import './TextAreaForm.css'; // We'll create a separate CSS file for styling

const AdminAboutProject = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    let res = await axios.put("https://vishwasatra-backend.onrender.com/api/adminabout",{
      text1,text2
    })
    alert(res.data.message)
    };

  return (
    <div className="form-container">
      <h2 className="form-title">About Project Section</h2>
      <form onSubmit={handleSubmit} className="text-area-form">
        <label>
          <span>Text Area 1</span>
          <textarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Enter first text..."
            required
          />
        </label>

        <label>
          <span>Text Area 2</span>
          <textarea
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Enter second text..."
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminAboutProject;