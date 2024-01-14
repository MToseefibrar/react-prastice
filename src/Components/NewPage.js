import React, { useContext, useState } from 'react';
import Mianpage, {showData} from '../Components/Mianpage';

function NewPage() {

  const {data} = useContext(showData);
  console.log(data);


  return (
    <div>

    <>
    
    <div>
    {data.map ((value) =>{

      return<>
      
      <div>
      <h4>{value.title}</h4>
      </div>


      <div>
      <h4>{value.quillDescription}</h4>
      </div>
      
      </>
    })}
    
    </div>
    
    </>


   

      
    </div>
  )
}

export default NewPage
