import React, { useState } from 'react';

const Loader = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

  };

  return (
    <div>
      <input type="file"  onChange={handleImageChange} />
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} />}
    </div>
  );
};

export default Loader;
