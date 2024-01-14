import React, { useContext, useState} from 'react';
import FormDescription, {printData} from "./Components/FormDescription"

const NextPage = () => {


  
  const {data,setNext} = useContext(printData);
  console.log("data:::",data);

  

  return (
    <div>
      
      {data.map((val)=>{
        return <>
         
        <div className='quillContainer'>
        <div className='Title'>
        <h4>{val.blogtitle}</h4>
        </div>

        <div className='titletwo'>
        
        {val.quillData}
        </div>


        <button onClick={()=>{setNext(true)}}> Go Back</button>
        </div>
      
         
        

        
        </>
      })
      
    }

    </div>
  )
}

export default NextPage
