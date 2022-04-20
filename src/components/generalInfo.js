import React from 'react';
import Education from './education';
import ProfilePic from './profilePic_and_CV';




 function GeneralInfo() {
  return (
    <form className='form'>
        <ProfilePic />
       <div className='form-head'> 
           <label for = "name">Full Name</label>
        <input type="text" id='name' value="Chimdi Anioke"></input>
        <label for = "email">Email</label>
        <input type="email" id='email'placeholder='your-name@gmail.com'></input>
        <label for = "number">Phone No</label>
        <input type="number" id='number' placeholder='08012345678'></input></div>
        <Education />
        
        </form>
  )
}
export default GeneralInfo;