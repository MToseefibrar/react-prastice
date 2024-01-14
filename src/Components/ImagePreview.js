

import React, { useState } from "react";


function ImagePreview() {

    const [file, setFile] = useState();


    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));

    }
  return (
   
    <div className="App">
    <label htmlFor="ImageUpload" className="label">

    <input type="file"   id="ImageUpload" onChange={handleChange} />
    <img src={file} className="image" />
    </label>

</div>
  )
}

export default ImagePreview;
