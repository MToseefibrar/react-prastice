import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from "quill-image-uploader";



function MyFunction() {
  const [quillValue, setQuillValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (value) => {
    setQuillValue(value);
    checkMinLength(value);
  };

  const checkMinLength = (value) => {
    const minLength = 50;
    const characterCount = value.replace(/\s/g, '').length;

    if (characterCount < minLength) {
      setErrorMessage(`Minimum ${minLength} characters are required.`);
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = () => {
    if (quillValue.trim() === '') {
      setErrorMessage('Value is required.');
    } else {
      setErrorMessage('');
      console.log('quill value', quillValue);
      // You can proceed with your submission logic here
    }
  };

  return (
    <div>
      <ReactQuill value={quillValue} onChange={handleChange} />
      <p style={{ color: 'red' }}>{errorMessage}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default MyFunction;
