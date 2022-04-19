import React from 'react';
import Education from './education';
import ProfilePic from './profilePic_and_CV';




 function GeneralInfo() {
  return (
    <form className='form'>
        <ProfilePic />
       <div className='form-head'> 
           <label for = "name">Full Name</label>
        <input type="text" id='name'></input>
        <label for = "email">Email</label>
        <input type="email" id='email'></input>
        <label for = "number">Phone No</label>
        <input type="number" id='number'></input></div>
        <Education />
        
        </form>
  )
}
export default GeneralInfo;