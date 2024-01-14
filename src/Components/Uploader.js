import React from "react";


const ImgUpload =({
    onChange,
    src
  })=>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img for="photo-upload" src={src}/>
      </div>
      <input id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  

    const Name =({
        onChange,
        value
      })=>
        <div className="field">
          <label htmlFor="name">
            name:
          </label>
          <input 
            id="name" 
            type="text" 
            onChange={onChange} 
            maxlength="25" 
            value={value} 
            placeholder="Alexa" 
            required/>
        </div>


          
const Status =({
    onChange,
    value
  })=>
    <div className="field">
      <label htmlFor="status">
        status:
      </label>
      <input 
        id="status" 
        type="text" 
        onChange={onChange} 
        maxLength="35" 
        value={value} 
        placeholder="It's a nice day!" 
        required/>
    </div>



    const Profile =({
        onSubmit,
        src,
        name,
        status,
      })=>
        <div className="card">
          <form onSubmit={onSubmit}>
            <h1>Profile Card</h1>
            <label className="custom-file-upload fas">
              <div className="img-wrap" >
                <img for="photo-upload" src={src}/>
              </div>
            </label>
            <div className="name">{name}</div>
            <div className="status">{status}</div>
            <button type="submit" className="edit">Edit Profile </button>
          </form>
        </div>



function Uploader ( ){

    return(

        <div>


        
        
        </div>
    )
}

export default Uploader;