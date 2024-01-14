import React, { createContext, useState } from 'react';
// import { useQuill } from 'react-quilljs';
import "quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';  
import { useContext } from 'react';
import NextPage from '../NextPage';
import HTMLReactParser from 'html-react-parser';



const printData = createContext();

function FormDescription() {

  const [next, setNext] = useState(true);
  const [blogtitle, setBlogtitle ] = useState(''); 
  const [quillData, setQuillData] = useState('');
  const [error , setError] = useState(null);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const maxCount = 20;


  const handelChange = (e) =>{

    
      if (e.target.value.length >= 20){
        setError("Minimum 20 letters Required")
      }else{

        setBlogtitle(e.target.value)
        setError(null);
      }
  }

  

  const addData = () => {
    setData([...data , {blogtitle,quillData}])
    setNext(false)

  }


  const handleEditorChange = (value) => {
    if (value.length <= maxCount) {
      setQuillData(value);
      checkMinWord(value);
    }
  };

  const checkMinWord = (value) => {

    const minWord = 500;

    const CharacterCount = value.replace(/\s/g, '').length;

    if(CharacterCount < minWord) {

      setError(`Mininmum ${minWord} words are required`)
    }else{

      setErrorMessage("");
    }


  }
 
 

  // const handleEditorChange = (value) => {
   
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(value, 'text/html');
  //   const plainText = doc.body.textContent;
  //   const wordsCount = plainText.split("").length;
  //   if(wordsCount > maxCount){
  //      setError("character limit exceeded")
  //   }else
  //   {

  //     console.log(wordsCount);
  //     console.log("data::::::::::::::>",plainText);
  //     setQuillData(plainText);
  //     // console.log(plainText);
  //     console.log(quillData);
  //   }
  // };


 


  return (

    <printData.Provider value={{data,setNext }}>
    <div>


    <h1 className="heading"> From  </h1>
    
    {next ? (
      <div className='container'>
      <div className='blogtitle'>
      <input type="text" className='inputfield'
      
      onChange={handelChange}
    
      value={blogtitle}
      placeholder='Blog Title' />

      <span className='error'>{error && error}</span>

    
      
       <ReactQuill className='quill'  theme="snow"  value={quillData} onChange={handleEditorChange}
       
       
       
       
       />
       <span className='error'>{error && error}</span>
       {quillData.length > maxCount && (
        <p style={{ color: 'red' }}>{errorMessage}</p>
      )}
      
          </div>
          

            <button className='btn' onClick={addData}> Submit</button>
       
        </div>
      ) : (
        <NextPage/>
      )}
    </div>

    </printData.Provider>
  );
}

export default FormDescription;
export {printData};
