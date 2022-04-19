import React from 'react';
import Experience from './experience';

 function Education() {
  return (
    <div className='form-head'>
        <label for="schoolName">Education Institue</label>
        <input id='schoolName' type="text"></input>
        <label for="courseName">Course of Study</label>
        <input id='courseName' type="text"></input>
        <div className='dateStudy'>
        <label for="datestart">Start Date</label>
        <input id='datestart' type="date"></input>
        <label for="datestop">Stop Date</label>
        <input id='datestop' type="date"></input>
        <Experience />
        

        
        </div>
    </div>
  )
}
export default Education;