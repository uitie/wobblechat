import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//There will only be one instance of this component on the page
//Requirements: one inherited prop: userId, must interact with DB and consequently update state upon confirmation of 
//  successful post to db

const CreateQuestionForm = (props) => {
  //using useState hook to enable state in component
  //first item = current value, second item = a setter function, to update value, destrctured via [] and initialized to empty string
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  //not working
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`This is what was submitted: ${title}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
        type="text" 
        value={title} 
        onChange={e => setTitle(e.target.value )}
        />
      </label>
      <br/>
      <label>
        Description:
        <input
        type="text" 
        value={description} 
        onChange={e => setDescription(e.target.value )}
        />
      </label>
      <br/>
      <input type="submit" value="Submit" />

      <li>Question title is: { title } </li>
    </form>
  );
}

export default CreateQuestionForm;