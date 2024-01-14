import React, { createContext, useState } from 'react'
import "quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';
import { useContext } from 'react';
import NewPage from '../NextPage';
import HTMLReactParser from 'html-react-parser';

const showData = createContext;

function Mianpage() {
   

const [title, setTitle ] =useState ('');
const [ quillDescription , setQuillDescription] = useState('');
const [data, setData] = useState([]);


const addData = () => {

   setData([...data, {title,quillDescription}])
   
};

const handleOnChange = (html) => {


   const parser = new DOMParser();
   const doc = parser.parseFromString(html, 'text/html');
   const plainText = doc.body.textContent;
   console.log(plainText);
   setQuillDescription(plainText);
   console.log(quillDescription);
}
console.log(title);
  return (

  <showData.Provider value={data}>

    <div className='Container'>

        <div className='form-box'>




        <input type="text"  className='field' placeholder='Enter Title'  value={title} onChange={(e) => setTitle(e.target.value)}/>
        

        <ReactQuill  placeholder='Enter Description' value={quillDescription}    onChange={handleOnChange}  />

        <button className='button' onClick={addData}> Submit</button>

        
        </div> 
      
    </div>

    </showData.Provider>
    
    
  );
}

export default Mianpage;
export{showData}



