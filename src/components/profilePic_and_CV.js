import React from 'react'

 function ProfilePic() {
  return (
    <div>
        <fieldset className='picV'>
    <legend>Profile Pic and Resume</legend>
    <p>
    <label for="avatar">Choose a profile picture:</label>

<input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"></input>

    </p>
    <p>
    <label for="resume">Upload your Resume:</label>

<input type="file"
       id="resume" name="resume"
       accept="text/pdf, text/doc"></input>

    </p>
    
  </fieldset>
    </div>
  )
}
export default ProfilePic;