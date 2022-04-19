import React from 'react';

 function Experience() {
  return (
    <div>
        <fieldset className='picV'>
    <legend>Work Experience</legend>
    <label for ="exp">Describe: </label>
    <textarea id="exp" name="exp"
          rows="5" cols="33">
Summary of work experience...
</textarea>
    
    
  </fieldset>
  <fieldset className='picV'>
    <legend>Skills</legend>
    <label for ="skills">List Skills: </label>
    <textarea id="skills" name="skills"
          rows="5" cols="33">
List of Skills.....
</textarea>
    
    
  </fieldset>
    </div>
  )
}
export default Experience;